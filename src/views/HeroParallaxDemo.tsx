"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return (
    <div className="mb-20">
      <HeroParallax products={products} />
    </div>
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/images/sample-ballon.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/images/sample-hand.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/images/sample-glass.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/images/sample-menu.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/images/sample-party.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/images/sample-seaside.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/images/sample-suits.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/images/sample-unite.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/images/sample-rings.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",

    thumbnail: "/images/sample-party.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/images/sample-rainbow.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/images/sample-ballon.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/images/sample-ballon.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/images/sample-ballon.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/images/sample-ballon.jpg",
  },
];
