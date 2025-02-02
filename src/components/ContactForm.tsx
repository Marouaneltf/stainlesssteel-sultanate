import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  title: string;
  description: string;
  rtl?: boolean;
}

export const ContactForm = ({ title, description, rtl = false }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(rtl ? "تم إرسال طلبك بنجاح" : "Your request has been sent successfully");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className={cn(rtl && "text-right")}>
        <CardTitle className="text-2xl font-bold text-steel-500">{title}</CardTitle>
        <CardDescription className="text-steel-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder={rtl ? "الاسم" : "Name"}
              required
              className={cn(rtl && "text-right")}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder={rtl ? "البريد الإلكتروني" : "Email"}
              required
              className={cn(rtl && "text-right")}
            />
          </div>
          <div>
            <Input
              placeholder={rtl ? "رقم الهاتف" : "Phone Number"}
              required
              className={cn(rtl && "text-right")}
            />
          </div>
          <div>
            <Input
              placeholder={rtl ? "نوع النشاط التجاري" : "Business Type"}
              required
              className={cn(rtl && "text-right")}
            />
          </div>
          <div>
            <Input
              placeholder={rtl ? "المدينة" : "City"}
              required
              className={cn(rtl && "text-right")}
            />
          </div>
          <div>
            <Textarea
              placeholder={rtl ? "تفاصيل الطلب" : "Inquiry Details"}
              required
              className={cn("min-h-[100px]", rtl && "text-right")}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-steel-500 hover:bg-steel-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? 
              (rtl ? "جاري الإرسال..." : "Sending...") : 
              (rtl ? "إرسال الطلب" : "Send Request")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};