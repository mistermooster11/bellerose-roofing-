export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/how-to-spot-roof-damage-after-a-storm/",
    image: "/images/blog-3.png",
    date: "15",
    monthYear: "May '26",
    category: "Roofing Tips",
    categoryHref: "/category/roofing-tips/",
    title: "How to Spot Roof Damage After a Storm",
    excerpt:
      "Wind, hail, and heavy rain can damage a roof in ways that aren't obvious from the ground. This guide walks you through what to look for after a major storm — and when to call a professional.",
  },
  {
    slug: "/blog/repair-vs-replace-how-to-decide/",
    image: "/images/blog-2.png",
    date: "01",
    monthYear: "Apr '26",
    category: "Roofing Tips",
    categoryHref: "/category/roofing-tips/",
    title: "Roof Repair vs. Full Replacement: How to Decide",
    excerpt:
      "Not every damaged roof needs to be replaced. This post explains when a repair is the smarter financial choice — and when replacement is the only cost-effective option.",
  },
];
