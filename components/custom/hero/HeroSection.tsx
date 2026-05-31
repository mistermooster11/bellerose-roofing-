"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tl: any;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return; // StrictMode unmounted before import resolved

      gsap.set([titleRef.current, dividerRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
      });

      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(titleRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, clearProps: "all" }
        )
        .fromTo(dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "left center", clearProps: "all" },
          "-=0.4"
        )
        .fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "all" },
          "-=0.3"
        )
        .fromTo(buttonsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: "all" },
          "-=0.4"
        );
    })();

    return () => {
      cancelled = true;
      tl?.kill();
    };
  }, []);

  return (
    <section className="hero">
      {/* Hero background video */}
      <div className="hero__video-bg">
        <iframe
          src="https://customer-ip9lnkk65px0t3ak.cloudflarestream.com/d47b3b9e769e6492aa48616674ce7d7f/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=true"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>
          Roofing, Siding &amp; Windows
          <br />
          in Queens &amp; Long Island
        </h1>

        <hr className="hero__divider" ref={dividerRef} />

        <p className="hero__description" ref={descRef}>
          Family-owned and operated for 35+ years. Licensed &amp; insured across the
          <br />
          5 boroughs, Nassau County, and Suffolk County. Free estimates — no pressure.
        </p>

        <div className="hero__buttons" ref={buttonsRef}>
          <Link href="/contact-us" className="hero__btn-primary">
            Free Estimate
          </Link>
          <Link href="/about-us" className="hero__btn-secondary">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}