import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Visual.Life — Your face, decoded",
    short_name: "Visual.Life",
    description: "Private on-device face analysis with a personal haircut and grooming strategy.",
    start_url: "/",
    display: "standalone",
    background_color: "#102800",
    theme_color: "#dfff3f",
    icons: [{ src: "/visual-life-icon.png", sizes: "512x512", type: "image/png" }],
  };
}
