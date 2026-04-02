import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageVisit } from "@/lib/analytics";

export const usePageVisitTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageVisit(location.pathname).catch((error) => {
      console.error("Failed to track page visit", error);
    });
  }, [location.pathname]);
};