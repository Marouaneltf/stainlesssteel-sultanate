import { useState } from "react";
import { LanguageToggle, type Language } from "@/components/LanguageToggle";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ProductCategory } from "@/components/ProductCategory";
import { IndustrySection } from "@/components/IndustrySection";
import { Testimonial } from "@/components/Testimonial";
import { ContactForm } from "@/components/ContactForm";
import { PopupContent } from "@/components/PopupContent";
import { content } from "@/content/homepage";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [currentPopup, setCurrentPopup] = useState<string | null>(null);
  const t = content[language];
  const isRTL = language === "ar";

  const handleSectionClick = (section: string) => {
    setCurrentPopup(section);
  };

  return (
    <>
      <SEOHead language={language} />
      <div className={`min-h-screen ${isRTL ? "font-arabic" : ""}`}>
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
        <section 
          className="py-20 px-4 md:px-6 lg:px-8 bg-white cursor-pointer"
          onClick={() => handleSectionClick("products")}
        >
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
        
        {/* Industry Solutions Section */}
        <section 
          className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 cursor-pointer"
          onClick={() => handleSectionClick("industries")}
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-steel-500 mb-4">
                {t.industries.title}
              </h2>
              <p className="text-xl text-steel-300">
                {t.industries.subtitle}
              </p>
            </div>
            <div className="space-y-8">
              {t.industries.sections.map((section, index) => (
                <IndustrySection
                  key={index}
                  {...section}
                  rtl={isRTL}
                  className={index % 2 === 0 ? "" : "bg-white"}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section 
          className="py-20 px-4 md:px-6 lg:px-8 bg-white cursor-pointer"
          onClick={() => handleSectionClick("testimonials")}
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-steel-500 mb-4">
                {t.testimonials.title}
              </h2>
              <p className="text-xl text-steel-300">
                {t.testimonials.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.testimonials.items.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  {...testimonial}
                  rtl={isRTL}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section 
          className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 cursor-pointer"
          onClick={() => handleSectionClick("contact")}
        >
          <div className="container mx-auto max-w-7xl">
            <ContactForm
              title={t.contact.title}
              description={t.contact.description}
              rtl={isRTL}
            />
          </div>
        </section>

        {/* Popups */}
        {currentPopup && (
          <PopupContent
            isOpen={true}
            onClose={() => setCurrentPopup(null)}
            content={t[currentPopup].popup}
            language={language}
          />
        )}
      </div>
    </>
  );
};

export default Index;
