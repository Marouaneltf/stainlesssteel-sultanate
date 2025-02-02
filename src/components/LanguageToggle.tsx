import { useState } from "react";
import { Button } from "@/components/ui/button";

export type Language = "en" | "ar";

interface LanguageToggleProps {
  onLanguageChange: (lang: Language) => void;
  currentLanguage: Language;
}

export const LanguageToggle = ({ onLanguageChange, currentLanguage }: LanguageToggleProps) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={() => onLanguageChange(currentLanguage === "en" ? "ar" : "en")}
        variant="outline"
        className="font-semibold"
      >
        {currentLanguage === "en" ? "العربية" : "English"}
      </Button>
    </div>
  );
};