"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { NOTICE_COOKIE } from "@/lib/site";

export function CookieNotice() {
  const dismissed = useSyncExternalStore(subscribe, getDismissed, getServerDismissed);
  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4" data-theme="light">
      <div
        role="region"
        aria-label="Cookie notice"
        className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-4 text-sm text-body shadow-[0_16px_40px_-24px_rgba(10,15,30,0.45)] sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="max-w-3xl leading-relaxed">
          Trovey uses one essential cookie to remember that you closed this notice. We do not use analytics or
          advertising cookies.{" "}
          <Link href="/privacy" className="font-semibold text-teal-strong underline decoration-teal/40 underline-offset-2">
            Privacy
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

function subscribe(callback: () => void) {
  window.addEventListener("trovey:notice", callback);
  return () => window.removeEventListener("trovey:notice", callback);
}

function getDismissed() {
  return document.cookie.split("; ").some((row) => row.startsWith(`${NOTICE_COOKIE}=`));
}

function getServerDismissed() {
  return true;
}

function dismiss() {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${NOTICE_COOKIE}=1; Path=/; Max-Age=15552000; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event("trovey:notice"));
}
