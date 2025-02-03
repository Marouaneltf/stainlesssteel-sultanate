import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PopupContent } from "./PopupContent";

interface IndustrySectionProps {
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  className?: string;
  rtl?: boolean;
  popupContent?: {
    title: string;
    sections: Array<{
      heading: string;
      content: string;
    }>;
  };
}

export const IndustrySection = ({ 
  title, 
  description, 
  benefits, 
  imageUrl, 
  className,
  rtl = false,
  popupContent
}: IndustrySectionProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    if (popupContent) {
      setIsPopupOpen(true);
    }
  };

  return (
    <>
      <Card 
        className={cn("overflow-hidden cursor-pointer", className)}
        onClick={handleClick}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className={cn("p-6", rtl && "order-2")}>
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-bold text-steel-500">{title}</CardTitle>
              <CardDescription className="text-steel-300 mt-2">{description}</CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-steel-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-steel-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
          <div className={cn("relative h-64 md:h-auto", rtl && "order-1")}>
            <img
              src={imageUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Card>

      {popupContent && (
        <PopupContent
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          content={popupContent}
          language={rtl ? "ar" : "en"}
        />
      )}
    </>
  );
};