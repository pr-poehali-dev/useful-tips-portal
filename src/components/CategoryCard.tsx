import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
  slug: string;
}

export default function CategoryCard({ name, icon, count, slug }: CategoryCardProps) {
  return (
    <Link to={`/category/${slug}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer p-6">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon name={icon} size={32} className="text-primary" />
          </div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{count.toLocaleString('ru-RU')} объявлений</p>
        </div>
      </Card>
    </Link>
  );
}
