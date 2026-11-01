"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { JoinLink, SectionLink } from "@/components/links";
import { btnPrimary } from "@/lib/classes";
import { NAV } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelId = `mobile-nav${useId().replace(/:/g, "")}`;
  const open = openPath === pathname;
  const overlay = pathname === "/";
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, getServerScrolled);
  const solid = !overlay || scrolled || open;

  useEffect(() => {
    if (!open) return;
    const first = document.getElementById(panelId)?.querySelector("a");
    if (first instanceof HTMLAnchorElement) first.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, panelId]);

  const close = () => setOpenPath(null);
  const tone = solid ? "onLight" : "onDark";
  const linkClass = solid
    ? "rounded-full px-3 py-2 text-sm font-medium text-navy hover:text-teal-strong"
    : "rounded-full px-3 py-2 text-sm font-medium text-paper/90 hover:text-mint";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 ${solid ? "border-b border-navy/10 bg-white/95 text-ink backdrop-blur-md" : "bg-transparent text-paper"}`}
      data-theme={solid ? "light" : "dark"}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href={overlay ? "#top" : "/#top"} className="rounded-md" aria-label="Trovey, back to top">
          <Logo tone={tone} />
        </a>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <SectionLink key={item.hash} hash={item.hash} className={linkClass}>
              {item.label}
            </SectionLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <JoinLink join="business" className={`${btnPrimary} hidden sm:inline-flex`} onNavigate={close}>
            Get Early Access
          </JoinLink>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M4 4 L14 14 M14 4 L4 14" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M3 5 H15 M3 9 H15 M3 13 H15" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id={panelId} className="border-t border-navy/10 bg-white px-5 py-4 lg:hidden" data-theme="light">
          <nav aria-label="Mobile">
            <ul className="grid">
              {NAV.map((item) => (
                <li key={item.hash}>
                  <SectionLink
                    hash={item.hash}
                    onNavigate={close}
                    className="block rounded-lg px-2 py-3 text-base font-medium text-ink"
                  >
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
            <JoinLink join="business" className={`${btnPrimary} mt-3 w-full`} onNavigate={close}>
              Get Early Access
            </JoinLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrolled() {
  return window.scrollY > 12;
}

function getServerScrolled() {
  return false;
}
