"use client";

import Link from "next/link";
import type { ReactNode, CSSProperties } from "react";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  label: string;
  bgColor?: string;
  borderColor?: string;
  flairColor?: string;
  textColor?: string;
  textHoverColor?: string;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  onClick?: () => void;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  disabled?: boolean;

  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
}

interface ButtonStyle extends CSSProperties {
  "--text-color"?: string;
  "--text-hover"?: string;
}

export default function Button({
  label,
  bgColor = "transparent",
  borderColor = "",
  flairColor = "",
  textColor = "",
  textHoverColor = "",
  leftIcon,
  rightIcon,
  onClick,
  href,
  target,
  disabled = false,
  size = "md",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const sizeMap: Record<ButtonSize, string> = {
    sm: "px-5 py-2 text-[13px] gap-1.5 font-medium",
    md: "px-7 py-3 text-[14px] gap-2 font-semibold tracking-wide",
    lg: "px-9 py-4 text-base gap-2.5 font-bold tracking-wider",
  };

  const sharedClasses = [
    "relative inline-flex items-center justify-center overflow-hidden",
    "rounded-full border text-center select-none",
    "transition-all duration-500 ease-out active:scale-95 group",
    disabled
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "cursor-pointer hover:scale-[1.03]",
    sizeMap[size],
    className,
  ].join(" ");

  const textStyles: ButtonStyle = {
    "--text-color": textColor,
    "--text-hover": textHoverColor,
  };

  const innerContent = (
    <>
      <span
        aria-hidden="true"
        style={{ backgroundColor: flairColor }}
        className="absolute inset-0 z-0 h-full w-full origin-center scale-0 rounded-full opacity-0 pointer-events-none transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
      />

      <span
        style={textStyles}
        className="relative z-10 inline-flex items-center gap-[inherit] whitespace-nowrap leading-none  transition-colors duration-300 "
      >
        {leftIcon && (
          <span className="inline-flex items-center text-[1.15em]">
            {leftIcon}
          </span>
        )}

        <span>{label}</span>

        {rightIcon && (
          <span className="inline-flex items-center text-[1.15em]">
            {rightIcon}
          </span>
        )}
      </span>
    </>
  );

  const customStyles: CSSProperties = {
    backgroundColor: bgColor,
    borderColor,
  };

  if (href && !disabled) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel || label}
        style={customStyles}
        className={sharedClasses}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel || label}
      style={customStyles}
      className={sharedClasses}
    >
      {innerContent}
    </button>
  );
}
