import type { Metadata } from "next";
import { HelpHero } from "./components/help-hero";
import { HelpCategories } from "./components/help-categories";
import { HelpFaq } from "./components/help-faq";
import { HelpSupportCard } from "./components/help-support-card";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Search our knowledge base or browse a help category.",
};

const HelpPage = () => {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-8">
      <HelpHero />
      <HelpCategories />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <HelpFaq />
        <HelpSupportCard />
      </div>
    </main>
  );
};

export default HelpPage;
