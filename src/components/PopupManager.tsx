import { useEffect, useState } from "react";
import { PopupContent } from "./PopupContent";
import { Language } from "@/components/LanguageToggle";

interface PopupManagerProps {
  language: Language;
}

export const PopupManager = ({ language }: PopupManagerProps) => {
  const [currentPopup, setCurrentPopup] = useState<number | null>(null);
  const [lastPopupTime, setLastPopupTime] = useState(Date.now());
  const POPUP_COOLDOWN = 30000; // 30 seconds between popups

  const popupContents = {
    en: [
      {
        title: "Why Stainless Steel is the Best Material for Restaurants",
        sections: [
          {
            heading: "Superior Hygiene Standards",
            content: "Stainless steel is the gold standard for restaurant hygiene..."
          },
          {
            heading: "Unmatched Durability",
            content: "In the demanding environment of a commercial kitchen..."
          },
          // ... Additional sections
        ]
      },
      // ... Other popups
    ],
    ar: [
      {
        title: "لماذا يعتبر الستانلس ستيل أفضل خامة للمطاعم",
        sections: [
          {
            heading: "معايير نظافة فائقة",
            content: "يعتبر الستانلس ستيل المعيار الذهبي لنظافة المطاعم..."
          },
          {
            heading: "متانة لا مثيل لها",
            content: "في بيئة المطبخ التجاري المتطلبة..."
          },
          // ... Additional sections
        ]
      },
      // ... Other popups
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const now = Date.now();

      if (now - lastPopupTime < POPUP_COOLDOWN) return;

      // Trigger at 25%, 50%, 75% scroll positions
      const triggerPoints = [0.25, 0.5, 0.75];
      const currentScrollPercentage = scrollPosition / pageHeight;

      triggerPoints.forEach((point, index) => {
        if (
          Math.abs(currentScrollPercentage - point) < 0.1 && 
          currentPopup === null
        ) {
          setCurrentPopup(index);
          setLastPopupTime(now);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    // Time-based trigger (2 minutes after page load)
    const timeoutId = setTimeout(() => {
      if (currentPopup === null) {
        setCurrentPopup(0);
        setLastPopupTime(Date.now());
      }
    }, 120000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [currentPopup, lastPopupTime]);

  return currentPopup !== null ? (
    <PopupContent
      isOpen={true}
      onClose={() => setCurrentPopup(null)}
      content={popupContents[language][currentPopup]}
      language={language}
    />
  ) : null;
};
