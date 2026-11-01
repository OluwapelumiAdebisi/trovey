"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { Audience } from "@/lib/audiences";

type SectionLinkProps = {
  hash: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function SectionLink({ hash, className, children, onNavigate }: SectionLinkProps) {
  const pathname = usePathname();
  const href = pathname === "/" ? hash : `/${hash}`;

  return (
    <a href={href} className={className} onClick={onNavigate}>
      {children}
    </a>
  );
}

type JoinLinkProps = {
  join?: Audience;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

/**
 * On the homepage this updates the form and scrolls.
 * From any other page it navigates to /?join=…#early-access.
 */
export function JoinLink({ join, className, children, onNavigate }: JoinLinkProps) {
  const pathname = usePathname();
  const href = join ? `/?join=${join}#early-access` : "/#early-access";

  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        onNavigate?.();
        if (pathname !== "/") return;
        event.preventDefault();
        window.history.pushState(null, "", href);
        window.dispatchEvent(new CustomEvent("trovey:join", { detail: join ?? "" }));
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document.getElementById("early-access")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }}
    >
      {children}
    </a>
  );
}
