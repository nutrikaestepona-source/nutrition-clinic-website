"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ActionButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "type"> & {
    href?: undefined;
    type?: "button" | "submit";
  };

type ButtonProps = LinkButtonProps | ActionButtonProps;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-coral-strong text-white hover:brightness-95 active:brightness-90",
  secondary:
    "border border-navy text-navy bg-transparent hover:bg-navy/5 active:bg-navy/10",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
};

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes =
    `${BASE_STYLES} ${SIZE_STYLES[size]} ${VARIANT_STYLES[variant]} ${className}`.trim();

  if (href) {
    // A plain <a> is used instead of next/link's <Link>: every href this
    // component receives is either a same-page hash anchor or an external
    // URL, never an internal route, so Link's client-side navigation adds
    // no benefit — and its hash-scroll handling doesn't fire reliably here.
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
