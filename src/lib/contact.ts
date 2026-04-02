import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import type { ContactSubmissionInput } from "@/integrations/supabase/types";

const getContactMetadata = () => {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);

  return {
    userAgent: window.navigator.userAgent,
    referrer: document.referrer || null,
    utmSource: params.get("utm_source"),
    utmMedium: params.get("utm_medium"),
    utmCampaign: params.get("utm_campaign"),
    screen: `${window.screen.width}x${window.screen.height}`,
  };
};

export const submitContactForm = async (input: ContactSubmissionInput) => {
  if (!isSupabaseConfigured) {
    throw new Error("Supabase is not configured.");
  }

  const payload = {
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone?.trim() || null,
    interest: input.interest || null,
    message: input.message.trim(),
    source_path: input.sourcePath,
    metadata: {
      ...getContactMetadata(),
      ...(input.metadata || {}),
    },
    status: "new",
  };

  const { error } = await supabase.from("contact_submissions").insert(payload);

  if (error) {
    throw error;
  }

  return true;
};