"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB?: {
      XFBML?: {
        parse: () => void;
      };
    };
  }
}

export default function FacebookWindow() {
  useEffect(() => {
    const existing = document.getElementById("facebook-jssdk");

    if (!existing) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0";
      document.body.appendChild(script);
    } else if (window.FB?.XFBML) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Facebook
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">Community updates</h3>
        </div>
        <a
          href="https://www.facebook.com/p/TwinsCustoms-61556407475850/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/75 transition hover:border-white/20 hover:text-white"
        >
          Open Page
        </a>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white p-3 text-slate-900">
        <div className="min-h-[420px] overflow-hidden rounded-2xl">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/p/TwinsCustoms-61556407475850/"
            data-tabs="timeline"
            data-width="500"
            data-height="420"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/p/TwinsCustoms-61556407475850/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/p/TwinsCustoms-61556407475850/">
                Twins Customs on Facebook
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </article>
  );
}
