"use client";

import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "text-center font-syne mb-10 sm:mb-16",
  eyebrowClassName = "",
  titleClassName = "font-syne font-extrabold  text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-4",
  descriptionClassName = "text-white/50 text-sm sm:text-base max-w-xl mx-auto",
  children,
  ...props
}) {
  return (
    <div className={className} {...props}>
      {eyebrow ? <div className={`eyebrow mb-3 ${eyebrowClassName}`.trim()}>{eyebrow}</div> : null}
      {title ? <h2 className={titleClassName}>{title}</h2> : null}
      {description ? <p className={descriptionClassName}>{description}</p> : null}
      {children}
    </div>
  );
}
