"use client";

import type { ReactNode } from "react";
import Link from "next/link";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function SmoothScrollLink({
  href,
  children,
  className,
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only process links that start with #
    if (href.startsWith("#")) {
      e.preventDefault();

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
