import { PageLayout } from "../components/layout/PageLayout";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Skills } from "../components/sections/Skills";
import { Tools } from "../components/sections/Tools";
import { Experience } from "../components/sections/Experience";
import { FeaturedWork } from "../components/sections/FeaturedWork";
import { Testimonials } from "../components/sections/Testimonials";
import { Education } from "../components/sections/Education";
import { BlogPreview } from "../components/sections/BlogPreview";
import { FaqPreview } from "../components/sections/FaqPreview";
import { ContactCTA } from "../components/sections/ContactCTA";

export function meta() {
  return [
    { title: "Jobayer Hossain — Full-Stack Developer & Shopify Expert" },
    { name: "description", content: "React, Next.js and Shopify developer building fast, pixel-perfect web experiences." },
  ];
}

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Services />
      <Skills />
      <Tools />
      <Experience />
      <FeaturedWork />
      <Testimonials />
      <Education />
      <BlogPreview />
      <FaqPreview />
      <ContactCTA />
    </PageLayout>
  );
}
