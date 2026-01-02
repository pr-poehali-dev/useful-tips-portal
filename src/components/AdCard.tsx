import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface AdCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
  date: string;
  isFavorite?: boolean;
}

export default function AdCard({ id, title, price, image, location, date, isFavorite = false }: AdCardProps) {
  return (
    <Link to={`/ad/${id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button 
            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Icon 
              name={isFavorite ? "Heart" : "Heart"} 
              size={20} 
              className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}
            />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg line-clamp-2 flex-1">{title}</h3>
          </div>
          <p className="text-2xl font-bold text-primary mb-3">{price.toLocaleString('ru-RU')} ₽</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Icon name="MapPin" size={16} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Icon name="Clock" size={16} />
            <span>{date}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
