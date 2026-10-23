// Analytics telemetry tracking helper functions (GTM, GA4, Google Ads, Clarity compatible)

interface DataLayerObject {
  event: string;
  [key: string]: unknown;
}

// Capture and preserve UTM parameters and Google Ads click ID (gclid)
export function captureAdParameters() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const trackingKeys = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    trackingKeys.forEach((key) => {
      const val = params.get(key);
      if (val) {
        sessionStorage.setItem(`annamayya_${key}`, val);
      }
    });
  } catch {
    // Ignore storage errors in restricted contexts
  }
}

export function getStoredAdParameters(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const data: Record<string, string> = {};
  try {
    const trackingKeys = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    trackingKeys.forEach((key) => {
      const val = sessionStorage.getItem(`annamayya_${key}`);
      if (val) data[key] = val;
    });
  } catch {
    // Ignore
  }
  return data;
}

// Safe check to verify dataLayer and gtag are present on window
function pushToDataLayer(obj: DataLayerObject) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(obj);

    // Google Tag (gtag.js) direct event dispatch if active
    if (typeof win.gtag === "function") {
      win.gtag("event", obj.event, {
        event_category: obj.category || "Engagement",
        event_label: obj.label,
        value: obj.value,
        ...getStoredAdParameters(),
      });
    }

    // Microsoft Clarity custom event support
    if (typeof win.clarity === "function") {
      win.clarity("event", obj.event, {
        category: obj.category || "interactivity",
        ...obj,
      });
    }
  }
}

export function trackPhoneClick(location: string) {
  pushToDataLayer({
    event: "phone_call_click",
    category: "CTA Clicks",
    action: "Call Action Initiated",
    label: location,
  });
}

export function trackWhatsAppClick(location: string) {
  pushToDataLayer({
    event: "whatsapp_click",
    category: "CTA Clicks",
    action: "WhatsApp Chat Initiated",
    label: location,
  });
}

export function trackFormSubmit(service: string, area: string) {
  pushToDataLayer({
    event: "generate_lead",
    category: "Form Actions",
    action: "Lead Form Submission",
    label: `Service: ${service} | Area: ${area}`,
  });
}

export function trackQuoteRequest(service: string, source: string) {
  pushToDataLayer({
    event: "quote_requested",
    category: "Form Actions",
    action: "Quote Requested",
    label: `Service: ${service} | Source: ${source}`,
  });
}

export function trackScrollDepth(depthPercentage: number) {
  pushToDataLayer({
    event: "scroll_depth",
    category: "User Behavior",
    action: "Page Scroll Depth",
    label: `${depthPercentage}% Scroll`,
  });
}
