import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Icon name="Package" size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl hidden sm:inline">Доска объявлений</span>
          </Link>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Поиск объявлений..." 
                className="pl-10 pr-4"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Icon name="Heart" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Icon name="User" size={20} />
            </Button>
            <Button className="gap-2">
              <Icon name="Plus" size={20} />
              <span className="hidden sm:inline">Подать объявление</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
