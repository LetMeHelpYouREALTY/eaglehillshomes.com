"use client";

import { useEffect, useRef } from "react";
import "./types";

type CalendlyWidgetProps = {
  url?: string;
  minWidth?: string;
  height?: string;
};

const DEFAULT_URL = "https://calendly.com/drjanduffy/showing";

export function CalendlyWidget({
  url = DEFAULT_URL,
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWidget = () => {
      if (typeof window === "undefined" || !window.Calendly || !widgetRef.current) {
        return;
      }

      widgetRef.current.innerHTML = "";
      const widgetDiv = document.createElement("div");
      widgetDiv.className = "calendly-inline-widget";
      widgetDiv.setAttribute("data-url", url);
      widgetDiv.style.minWidth = minWidth;
      widgetDiv.style.height = height;
      widgetDiv.style.width = "100%";
      widgetRef.current.appendChild(widgetDiv);

      window.Calendly.initInlineWidget({
        url,
        parentElement: widgetDiv,
      });
    };

    if (window.Calendly) {
      initWidget();
      return;
    }

    const check = setInterval(() => {
      if (window.Calendly) {
        clearInterval(check);
        initWidget();
      }
    }, 100);

    const timeout = setTimeout(() => clearInterval(check), 10000);
    return () => {
      clearInterval(check);
      clearTimeout(timeout);
    };
  }, [url, minWidth, height]);

  return <div ref={widgetRef} style={{ minWidth, height, width: "100%" }} />;
}
