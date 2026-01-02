import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = [
  {
    name: 'Продуктивность',
    description: 'Советы для эффективной работы и управления временем',
    icon: 'Target',
    count: 45,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Здоровье',
    description: 'Рекомендации по физическому и ментальному здоровью',
    icon: 'Heart',
    count: 38,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    name: 'Саморазвитие',
    description: 'Идеи для личностного роста и обучения',
    icon: 'TrendingUp',
    count: 32,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    name: 'Психология',
    description: 'Понимание себя и улучшение отношений',
    icon: 'Brain',
    count: 28,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    name: 'Финансы',
    description: 'Умное управление деньгами и инвестиции',
    icon: 'DollarSign',
    count: 25,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    name: 'Отношения',
    description: 'Советы для гармоничных отношений',
    icon: 'Users',
    count: 22,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  }
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Категории советов
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Выберите интересующую вас тему и найдите полезные рекомендации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={category.icon} size={32} className={category.color} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center text-foreground/50 text-sm">
                  <Icon name="FileText" size={16} className="mr-2" />
                  <span>{category.count} советов</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
