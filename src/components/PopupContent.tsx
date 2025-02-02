import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { Language } from "@/components/LanguageToggle";

interface PopupContentProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    title: string;
    sections: Array<{
      heading: string;
      content: string;
    }>;
  };
  language: Language;
}

export const PopupContent = ({ isOpen, onClose, content, language }: PopupContentProps) => {
  const isRTL = language === "ar";
  
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className={`max-w-4xl max-h-[80vh] ${isRTL ? "font-arabic" : ""}`}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{content.title}</DialogTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <ScrollArea className="h-full max-h-[60vh] pr-4">
          <div className="space-y-6">
            {content.sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold text-steel-500">
                  {section.heading}
                </h3>
                <p className="text-steel-300 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};