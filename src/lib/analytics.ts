import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import type { PageVisitMetadata } from "@/integrations/supabase/types";

const VISITOR_TOKEN_KEY = "bgih:visitor-token";
const SESSION_TOKEN_KEY = "bgih:session-token";
const LAST_VISIT_KEY_PREFIX = "bgih:last-visit:";
const VISIT_WINDOW_MS = 30 * 60 * 1000;

const createToken = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
};

const getStorage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return {
    local: window.localStorage,
    session: window.sessionStorage,
  };
};

export const getVisitorToken = () => {
  const storage = getStorage();
  if (!storage) {
    return createToken();
  }

  const existing = storage.local.getItem(VISITOR_TOKEN_KEY);
  if (existing) {
    return existing;
  }

  const token = createToken();
  storage.local.setItem(VISITOR_TOKEN_KEY, token);
  return token;
};

export const getSessionToken = () => {
  const storage = getStorage();
  if (!storage) {
    return createToken();
  }

  const existing = storage.session.getItem(SESSION_TOKEN_KEY);
  if (existing) {
    return existing;
  }

  const token = createToken();
  storage.session.setItem(SESSION_TOKEN_KEY, token);
  return token;
};

export const shouldTrackVisit = (pagePath: string) => {
  const storage = getStorage();
  if (!storage) {
    return false;
  }

  const lastVisitAt = storage.local.getItem(`${LAST_VISIT_KEY_PREFIX}${pagePath}`);
  if (!lastVisitAt) {
    return true;
  }

  return Date.now() - Number(lastVisitAt) > VISIT_WINDOW_MS;
};

const markVisitTracked = (pagePath: string) => {
  const storage = getStorage();
  if (!storage) {
    return;
  }

  storage.local.setItem(`${LAST_VISIT_KEY_PREFIX}${pagePath}`, Date.now().toString());
};

const getMarketingMetadata = (): PageVisitMetadata => {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utmSource: params.get("utm_source"),
    utmMedium: params.get("utm_medium"),
    utmCampaign: params.get("utm_campaign"),
  };
};

export const trackPageVisit = async (pagePath: string) => {
  if (!isSupabaseConfigured || typeof window === "undefined" || !shouldTrackVisit(pagePath)) {
    return false;
  }

  const { error, data } = await supabase.rpc("track_page_visit", {
    p_page_path: pagePath,
    p_visitor_token: getVisitorToken(),
    p_session_token: getSessionToken(),
    p_user_agent: window.navigator.userAgent,
    p_referrer: document.referrer || null,
    p_metadata: getMarketingMetadata(),
  });

  if (error) {
    throw error;
  }

  if (data) {
    markVisitTracked(pagePath);
  }

  return Boolean(data);
};