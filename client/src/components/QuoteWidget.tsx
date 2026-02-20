import { useEffect } from "react";

export function QuoteWidget() {
  useEffect(() => {
    // Check if script is already present to avoid duplicates
    if (!document.getElementById("strife")) {
      const script = document.createElement("script");
      script.id = "strife";
      script.src = "https://cdn.quoteandapply.io/widget.js";
      script.setAttribute("data-strife-key", "14m9TyEp9Hcmlr-n");
      script.setAttribute("data-strife-container-id", "container-id");
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto my-12 px-4">
      <div id="container-id" className="min-h-[600px] w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"></div>
    </div>
  );
}
