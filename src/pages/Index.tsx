import { useState } from "react";
import { LanguageToggle, type Language } from "@/components/LanguageToggle";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const content = {
  en: {
    hero: {
      title: "Premium Stainless Steel Solutions",
      subtitle: "For Commercial Kitchens & Industrial Facilities",
      cta: "Request a Quote",
    },
    products: {
      title: "Our Products",
      items: [
        {
          title: "Commercial Tables",
          description: "Heavy-duty stainless steel tables built for professional kitchens",
        },
        {
          title: "Industrial Refrigerators",
          description: "High-capacity cooling solutions for restaurants and hotels",
        },
        {
          title: "Storage Solutions",
          description: "Custom closets and shelving systems for optimal organization",
        },
      ],
    },
  },
  ar: {
    hero: {
      title: "حلول ستانلس ستيل متميزة",
      subtitle: "للمطابخ التجارية والمنشآت الصناعية",
      cta: "اطلب عرض سعر",
    },
    products: {
      title: "منتجاتنا",
      items: [
        {
          title: "طاولات تجارية",
          description: "طاولات ستانلس ستيل متينة مصممة للمطابخ المهنية",
        },
        {
          title: "ثلاجات صناعية",
          description: "حلول تبريد عالية السعة للمطاعم والفنادق",
        },
        {
          title: "حلول التخزين",
          description: "خزائن ورفوف مخصصة للتنظيم الأمثل",
        },
      ],
    },
  },
};

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  return (
    <>
      <SEOHead language={language} />
      <div className={`min-h-screen bg-gradient-to-r from-steel-300 to-steel-400 ${language === "ar" ? "font-arabic" : ""}`}>
        <LanguageToggle onLanguageChange={setLanguage} currentLanguage={language} />
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-white text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-xl mb-8">{t.hero.subtitle}</p>
          <Button size="lg" className="bg-steel-500 hover:bg-steel-400 text-white">
            {t.hero.cta}
          </Button>
        </section>

        {/* Products Section */}
        <section className="container mx-auto px-4 py-20 bg-white rounded-t-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-steel-500">
            {t.products.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.products.items.map((item, index) => (
              <div key={index} className="bg-steel-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-steel-400">
                  {item.title}
                </h3>
                <p className="text-steel-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;