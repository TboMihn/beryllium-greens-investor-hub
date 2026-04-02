export type ContactInterest = "Investment" | "Partnership" | "Agritourism" | "General";

export interface ContactSubmissionInput {
  name: string;
  email: string;
  phone?: string | null;
  interest?: ContactInterest | null;
  message: string;
  sourcePath: string;
  metadata?: Record<string, unknown>;
}

export interface PageVisitMetadata {
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  [key: string]: unknown;
}

export interface TrackPageVisitInput {
  pagePath: string;
  visitorToken: string;
  sessionToken?: string | null;
  userAgent?: string | null;
  referrer?: string | null;
  metadata?: PageVisitMetadata;
}