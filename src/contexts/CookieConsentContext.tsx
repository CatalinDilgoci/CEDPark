import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ConsentValue = "accepted" | "refused" | null;

interface CookieConsentContextValue {
  consent: ConsentValue;
  accept: () => void;
  refuse: () => void;
  reset: () => void;
}

const STORAGE_KEY = "ced-cookie-consent";
const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined);

// Replace with the real Measurement ID (e.g. G-ABC123XYZ)
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.includes("XXXX")) return;
  if (document.getElementById("ga4-script")) return;

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentValue>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentValue;
    if (stored === "accepted" || stored === "refused") {
      setConsent(stored);
      if (stored === "accepted") loadGoogleAnalytics();
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    loadGoogleAnalytics();
  };
  const refuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setConsent("refused");
  };
  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setConsent(null);
  };

  return (
    <CookieConsentContext.Provider value={{ consent, accept, refuse, reset }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}
