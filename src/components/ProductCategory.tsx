import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCategoryProps {
  title: string;
  description: string;
  features: string[];
}

export const ProductCategory = ({ title, description, features }: ProductCategoryProps) => {
  return (
    <Card className="h-full">
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
  );
};