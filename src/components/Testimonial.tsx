import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PopupContent } from "./PopupContent";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  location: string;
  className?: string;
  rtl?: boolean;
}

export const Testimonial = ({ 
  quote, 
  author, 
  company, 
  location,
  className,
  rtl = false 
}: TestimonialProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Card className={cn("h-full cursor-pointer", className)} onClick={() => setIsPopupOpen(true)}>
        <CardHeader className={cn("pb-2", rtl && "text-right")}>
          <svg
            className={cn("h-8 w-8 text-steel-300", rtl && "mr-auto")}
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </CardHeader>
        <CardContent className={cn(rtl && "text-right")}>
          <CardDescription className="text-lg text-steel-400 mb-4">{quote}</CardDescription>
          <div className="text-sm text-steel-500">
            <p className="font-semibold">{author}</p>
            <p>{company}</p>
            <p className="text-steel-300">{location}</p>
          </div>
        </CardContent>
      </Card>

      <PopupContent
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        content={{
          title: rtl ? "شهادة العميل" : "Client Testimonial",
          sections: [
            {
              heading: rtl ? "الشهادة" : "Testimonial",
              content: quote
            },
            {
              heading: rtl ? "معلومات العميل" : "Client Information",
              content: `${author}\n${company}\n${location}`
            }
          ]
        }}
        language={rtl ? "ar" : "en"}
      />
    </>
  );
};