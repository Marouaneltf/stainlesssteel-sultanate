import { Helmet } from "react-helmet";

interface SEOHeadProps {
  language: "en" | "ar";
}

export const SEOHead = ({ language }: SEOHeadProps) => {
  const title = language === "en" 
    ? "Premium Stainless Steel Solutions for Commercial Kitchens | Saudi Arabia"
    : "حلول الستانلس ستيل للمطابخ التجارية | المملكة العربية السعودية";

  const description = language === "en"
    ? "Leading manufacturer of commercial kitchen equipment, stainless steel furniture, and custom solutions for restaurants, hotels, and hospitals across Saudi Arabia. Premium quality guaranteed."
    : "شركة رائدة في تصنيع معدات المطابخ التجارية وأثاث الستانلس ستيل والحلول المخصصة للمطاعم والفنادق والمستشفيات في جميع أنحاء المملكة العربية السعودية. جودة ممتازة مضمونة.";

  return (
    <Helmet>
      <html lang={language} dir={language === "ar" ? "rtl" : "ltr"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="stainless steel,commercial kitchen,restaurant equipment,hotel furniture,hospital equipment,custom solutions,Saudi Arabia,Riyadh,Jeddah,Dammam" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};