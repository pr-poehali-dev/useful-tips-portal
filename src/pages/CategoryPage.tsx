import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import AdCard from '@/components/AdCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const mockAds = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max 256GB Титановый',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1696446702052-1b828f8fc540?w=500',
    location: 'Москва, Центральный район',
    date: 'Сегодня, 14:30',
  },
  {
    id: '2',
    title: 'Samsung Galaxy S24 Ultra',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
    location: 'Санкт-Петербург',
    date: 'Сегодня, 12:15',
  },
  {
    id: '3',
    title: 'MacBook Pro 16" M3 Max',
    price: 285000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    location: 'Казань',
    date: 'Вчера, 16:20',
  },
  {
    id: '4',
    title: 'iPad Air 2024 256GB',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    location: 'Новосибирск',
    date: 'Вчера, 14:10',
  },
  {
    id: '5',
    title: 'AirPods Pro 2-го поколения',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500',
    location: 'Екатеринбург',
    date: '2 дня назад',
  },
  {
    id: '6',
    title: 'PlayStation 5 + 2 геймпада',
    price: 52000,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500',
    location: 'Краснодар',
    date: '3 дня назад',
  },
];

export default function CategoryPage() {
  const { slug } = useParams();
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary">Главная</a>
          <Icon name="ChevronRight" size={16} />
          <span className="text-gray-900 font-medium">Электроника</span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Электроника</h1>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2 lg:hidden"
          >
            <Icon name="Filter" size={20} />
            Фильтры
          </Button>
        </div>

        <div className="flex gap-6">
          {showFilters && (
            <aside className="w-full lg:w-80 space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  Местоположение
                </h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите город" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    <SelectItem value="kazan">Казань</SelectItem>
                    <SelectItem value="ekb">Екатеринбург</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Wallet" size={20} />
                  Цена
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="от"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="flex-1 px-3 py-2 border rounded-md"
                    />
                    <input
                      type="number"
                      placeholder="до"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="flex-1 px-3 py-2 border rounded-md"
                    />
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500000}
                    step={1000}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Состояние</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox id="new" />
                    <span className="text-sm">Новое</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox id="used" />
                    <span className="text-sm">Б/у</span>
                  </label>
                </div>
              </div>

              <Button className="w-full gap-2">
                <Icon name="Search" size={20} />
                Применить фильтры
              </Button>
            </aside>
          )}

          <main className="flex-1">
            <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between">
              <p className="text-gray-600">Найдено {mockAds.length} объявлений</p>
              <Select defaultValue="date">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">По дате</SelectItem>
                  <SelectItem value="price-asc">Сначала дешевые</SelectItem>
                  <SelectItem value="price-desc">Сначала дорогие</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockAds.map((ad) => (
                <AdCard key={ad.id} {...ad} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="gap-2">
                Показать ещё
                <Icon name="ChevronDown" size={20} />
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
