import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import AdCard from '@/components/AdCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const categories = [
  { name: 'Недвижимость', icon: 'Home', count: 15420, slug: 'realty' },
  { name: 'Транспорт', icon: 'Car', count: 23156, slug: 'transport' },
  { name: 'Работа', icon: 'Briefcase', count: 8934, slug: 'jobs' },
  { name: 'Электроника', icon: 'Smartphone', count: 31245, slug: 'electronics' },
  { name: 'Одежда', icon: 'Shirt', count: 12678, slug: 'clothes' },
  { name: 'Для дома', icon: 'Armchair', count: 9543, slug: 'home' },
  { name: 'Хобби', icon: 'Palette', count: 5432, slug: 'hobby' },
  { name: 'Услуги', icon: 'Wrench', count: 7891, slug: 'services' },
];

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
    title: '2-комнатная квартира, 65 м²',
    price: 8500000,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500',
    location: 'Санкт-Петербург',
    date: 'Сегодня, 12:15',
  },
  {
    id: '3',
    title: 'Toyota Camry 2020, 2.5 AT',
    price: 2450000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500',
    location: 'Москва',
    date: 'Вчера, 18:45',
  },
  {
    id: '4',
    title: 'MacBook Pro 16" M3 Max',
    price: 285000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    location: 'Казань',
    date: 'Вчера, 16:20',
  },
  {
    id: '5',
    title: 'Диван угловой, велюр',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
    location: 'Новосибирск',
    date: '2 дня назад',
  },
  {
    id: '6',
    title: 'PlayStation 5 + 2 геймпада',
    price: 52000,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500',
    location: 'Екатеринбург',
    date: '3 дня назад',
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Найдите всё, что нужно
              </h1>
              <p className="text-xl text-gray-600">
                Миллионы объявлений от продавцов по всей стране
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {categories.map((category) => (
                <CategoryCard key={category.slug} {...category} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Свежие объявления</h2>
              <Button variant="outline" className="gap-2">
                Все объявления
                <Icon name="ArrowRight" size={16} />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockAds.map((ad) => (
                <AdCard key={ad.id} {...ad} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <Icon name="Plus" size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Подайте объявление бесплатно
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Продавайте быстро и удобно
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              <Icon name="Plus" size={20} />
              Разместить объявление
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary p-2 rounded-lg">
                  <Icon name="Package" size={24} className="text-white" />
                </div>
                <span className="font-bold text-xl">Доска объявлений</span>
              </div>
              <p className="text-gray-600">
                Бесплатные объявления по всей России
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Популярные категории</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary">Недвижимость</a></li>
                <li><a href="#" className="hover:text-primary">Транспорт</a></li>
                <li><a href="#" className="hover:text-primary">Электроника</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Помощь</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary">Как подать объявление</a></li>
                <li><a href="#" className="hover:text-primary">Безопасность</a></li>
                <li><a href="#" className="hover:text-primary">Правила</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@example.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 (800) 555-35-35
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            © 2026 Доска объявлений. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
