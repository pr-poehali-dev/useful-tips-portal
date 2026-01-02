import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TipCardProps {
  title: string;
  description: string;
  category: string;
  icon: string;
  color?: string;
}

export default function TipCard({ title, description, category, icon }: TipCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100 cursor-pointer">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon name={icon} size={24} className="text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}