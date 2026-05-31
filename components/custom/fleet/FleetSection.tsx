"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FleetSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".fleet-section__text", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".fleet-section__img", {
          scale: 0.92, opacity: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fleet-section" ref={sectionRef}>
      <div className="fleet-section__container">
        {/* LEFT — text */}
        <div className="fleet-section__text">
          <div className="fleet-section__eyebrow">Our Work</div>
          <h2 className="fleet-section__heading">
            Roofing &amp; Siding Jobs Across NYC &amp; Long Island
          </h2>
          <p className="fleet-section__intro">
            From Queens tear-offs to Nassau County siding replacements, our crew has been
            completing jobs across the 5 boroughs and Long Island for over 35 years. We work
            clean, protect your property, and do a final walkthrough with you before we leave.
          </p>
        </div>

        {/* RIGHT — job photos */}
        <div className="fleet-section__images">
          <Image
            src="/images/job-photo-1.jpg"
            alt="Bellerose Roofing completed job"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="/images/job-photo-2.jpg"
            alt="Bellerose Roofing crew on a roofing project"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="/images/job-photo-3.jpg"
            alt="Completed roof installation by Bellerose Roofing"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
        </div>
      </div>
    </section>
  );
}
