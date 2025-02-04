import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PopupContent } from "@/components/PopupContent";

interface ProductCategoryProps {
  title: string;
  description: string;
  features: string[];
  popup?: {
    title: string;
    sections: Array<{
      heading: string;
      content: string;
    }>;
  };
}

export const ProductCategory = ({ title, description, features, popup }: ProductCategoryProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Card 
        className="h-full cursor-pointer transition-all hover:shadow-lg"
        onClick={() => popup && setIsPopupOpen(true)}
      >
        <CardHeader>
          <CardTitle className="text-xl font-bold text-steel-500">{title}</CardTitle>
          <CardDescription className="text-steel-300">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-steel-400">
                <span className="h-1.5 w-1.5 rounded-full bg-steel-400" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {popup && (
        <PopupContent
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          content={popup}
          language="en"
        />
      )}
    </>
  );
};