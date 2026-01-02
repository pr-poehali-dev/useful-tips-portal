import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const mockAd = {
  title: 'iPhone 15 Pro Max 256GB Титановый',
  price: 125000,
  images: [
    'https://images.unsplash.com/photo-1696446702052-1b828f8fc540?w=800',
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    'https://images.unsplash.com/photo-1695048133082-1a20484d2569?w=800',
  ],
  location: 'Москва, Центральный район',
  date: 'Сегодня в 14:30',
  views: 243,
  description: `Продаю iPhone 15 Pro Max в идеальном состоянии. 

Характеристики:
• Память: 256GB
• Цвет: Титановый (Natural Titanium)
• Состояние: отличное, без царапин
• Комплектация: полная (коробка, кабель, документы)
• Покупался в официальном магазине Apple
• Всё работает идеально

Причина продажи: переход на Android. 
Торг возможен при личной встрече.`,
  seller: {
    name: 'Александр',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    rating: 4.9,
    reviews: 47,
    adsCount: 12,
  },
};

export default function AdPage() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-primary">Главная</a>
          <Icon name="ChevronRight" size={16} />
          <a href="/category/electronics" className="hover:text-primary">Электроника</a>
          <Icon name="ChevronRight" size={16} />
          <span className="text-gray-900 font-medium">iPhone 15 Pro Max</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3] bg-gray-100">
                <img
                  src={mockAd.images[currentImage]}
                  alt={mockAd.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <Icon
                    name="Heart"
                    size={24}
                    className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}
                  />
                </button>
                {mockAd.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImage((prev) => (prev - 1 + mockAd.images.length) % mockAd.images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Icon name="ChevronLeft" size={24} />
                    </button>
                    <button
                      onClick={() => setCurrentImage((prev) => (prev + 1) % mockAd.images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Icon name="ChevronRight" size={24} />
                    </button>
                  </>
                )}
              </div>
              <div className="p-4 flex gap-2 overflow-x-auto">
                {mockAd.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h1 className="text-3xl font-bold mb-4">{mockAd.title}</h1>
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  {mockAd.location}
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  {mockAd.date}
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Eye" size={16} />
                  {mockAd.views} просмотров
                </div>
              </div>
              <div className="border-t pt-6">
                <h2 className="font-semibold text-lg mb-4">Описание</h2>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {mockAd.description}
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 sticky top-24">
              <p className="text-3xl font-bold text-primary mb-6">
                {mockAd.price.toLocaleString('ru-RU')} ₽
              </p>
              <div className="space-y-3">
                <Button className="w-full gap-2" size="lg">
                  <Icon name="MessageCircle" size={20} />
                  Написать продавцу
                </Button>
                <Button variant="outline" className="w-full gap-2" size="lg">
                  <Icon name="Phone" size={20} />
                  Показать телефон
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Продавец</h3>
              <div className="flex items-start gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={mockAd.seller.avatar} />
                  <AvatarFallback>{mockAd.seller.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{mockAd.seller.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                      <span>{mockAd.seller.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{mockAd.seller.reviews} отзывов</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                {mockAd.seller.adsCount} активных объявлений
              </div>
              <Button variant="outline" className="w-full">
                Все объявления продавца
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icon name="Shield" size={20} />
                Безопасная сделка
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                  Встречайтесь в людных местах
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                  Проверяйте товар перед покупкой
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                  Не переводите деньги заранее
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
