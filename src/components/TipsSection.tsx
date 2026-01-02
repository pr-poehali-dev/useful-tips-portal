import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import TipCard from './TipCard';

const allTips = [
  {
    id: 1,
    title: 'Планируйте день с вечера',
    description: 'Составление списка дел на следующий день помогает начать утро продуктивно и не тратить время на размышления о приоритетах.',
    category: 'Продуктивность',
    icon: 'Calendar',
    keywords: ['планирование', 'продуктивность', 'организация']
  },
  {
    id: 2,
    title: 'Пейте воду после пробуждения',
    description: 'Стакан воды утром запускает обмен веществ, помогает проснуться и восполняет потерю жидкости за ночь.',
    category: 'Здоровье',
    icon: 'Droplet',
    keywords: ['здоровье', 'вода', 'утро']
  },
  {
    id: 3,
    title: 'Правило 5 секунд для действий',
    description: 'Когда появляется идея что-то сделать, начните действовать в течение 5 секунд, иначе мозг найдет причину не делать это.',
    category: 'Мотивация',
    icon: 'Zap',
    keywords: ['мотивация', 'действие', 'продуктивность']
  },
  {
    id: 4,
    title: 'Метод Помодоро для концентрации',
    description: 'Работайте 25 минут без отвлечений, затем 5 минут отдыха. Это помогает сохранять фокус и избежать выгорания.',
    category: 'Продуктивность',
    icon: 'Timer',
    keywords: ['концентрация', 'фокус', 'работа']
  },
  {
    id: 5,
    title: 'Инвестируйте в качественный сон',
    description: 'Регулярный режим сна, темная комната и отсутствие гаджетов за час до сна улучшают качество отдыха.',
    category: 'Здоровье',
    icon: 'Moon',
    keywords: ['сон', 'отдых', 'здоровье']
  },
  {
    id: 6,
    title: 'Ведите дневник благодарности',
    description: 'Записывайте 3 вещи, за которые вы благодарны каждый день. Это помогает фокусироваться на позитивном.',
    category: 'Психология',
    icon: 'Heart',
    keywords: ['благодарность', 'позитив', 'психология']
  },
  {
    id: 7,
    title: 'Читайте 20 минут перед сном',
    description: 'Чтение перед сном снижает стресс, улучшает качество сна и расширяет кругозор.',
    category: 'Саморазвитие',
    icon: 'BookOpen',
    keywords: ['чтение', 'книги', 'развитие']
  },
  {
    id: 8,
    title: 'Делайте растяжку каждое утро',
    description: 'Легкая растяжка утром улучшает кровообращение, повышает гибкость и помогает проснуться.',
    category: 'Здоровье',
    icon: 'Activity',
    keywords: ['растяжка', 'упражнения', 'утро']
  },
  {
    id: 9,
    title: 'Правило двух минут',
    description: 'Если задача займет меньше 2 минут, сделайте ее сразу. Это предотвращает накопление мелких дел.',
    category: 'Продуктивность',
    icon: 'CheckCircle',
    keywords: ['эффективность', 'задачи', 'организация']
  }
];

export default function TipsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', ...Array.from(new Set(allTips.map(tip => tip.category)))];

  const filteredTips = allTips.filter(tip => {
    const matchesSearch = searchQuery === '' || 
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Все' || tip.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="tips" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Наши советы
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Изучайте проверенные рекомендации и применяйте их в жизни
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
            <Input
              type="text"
              placeholder="Поиск советов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <TipCard
              key={tip.id}
              title={tip.title}
              description={tip.description}
              category={tip.category}
              icon={tip.icon}
            />
          ))}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <Icon name="SearchX" size={48} className="text-foreground/30 mx-auto mb-4" />
            <p className="text-lg text-foreground/70">Советы не найдены</p>
            <p className="text-sm text-foreground/50">Попробуйте изменить запрос или выбрать другую категорию</p>
          </div>
        )}
      </div>
    </section>
  );
}
