import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Clay.ai" },
    { name: "description", content: "Welcome to Clay.ai" },
    { property: "og:description", content: "Welcome to my Clay.ai" },
    {
      property: "og:image",
      content: "https://clay-ai.vercel.app/clay-2.jpg",
    },
    { property: "og:url", content: "https://clay-ai.vercel.app/" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export default function Home() {
  return <Welcome />;
}
