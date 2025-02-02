import { useState } from "react";
import { LanguageToggle, type Language } from "@/components/LanguageToggle";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ProductCategory } from "@/components/ProductCategory";
import { content } from "@/content/homepage";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  return (
    <>
      <SEOHead language={language} />
      <div className={`min-h-screen ${language === "ar" ? "font-arabic" : ""}`}>
        <LanguageToggle onLanguageChange={setLanguage} currentLanguage={language} />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-steel-300 to-steel-400 py-20 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center text-white space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeIn">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl font-medium">
                {t.hero.subtitle}
              </p>
              <p className="text-lg max-w-3xl mx-auto opacity-90">
                {t.hero.description}
              </p>
              <Button 
                size="lg" 
                className="bg-steel-500 hover:bg-steel-400 text-white mt-8"
              >
                {t.hero.cta}
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-steel-500 mb-4">
                {t.products.title}
              </h2>
              <p className="text-xl text-steel-300">
                {t.products.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.products.categories.map((category, index) => (
                <ProductCategory
                  key={index}
                  title={category.title}
                  description={category.description}
                  features={category.features}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;