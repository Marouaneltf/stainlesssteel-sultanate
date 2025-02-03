import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle, type Language } from "@/components/LanguageToggle";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { content } from "@/content/homepage";

const Index = () => {
  const [language, setLanguage] = useState<Language>("ar");
  const t = content[language];
  const isRTL = language === "ar";

  return (
    <>
      <SEOHead language={language} />
      <div className={`min-h-screen ${isRTL ? "font-arabic" : ""}`}>
        <LanguageToggle onLanguageChange={setLanguage} currentLanguage={language} />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-steel-300 to-steel-400 min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center text-white space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeIn">
                {t.hero.title}
              </h1>
              <p className="text-2xl md:text-3xl font-medium">
                {t.hero.subtitle}
              </p>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-steel-500 hover:bg-steel-400 text-white"
                  asChild
                >
                  <Link to="/details">
                    {isRTL ? "استكشف منتجاتنا" : "Explore Our Products"}
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white"
                >
                  {t.hero.cta}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;