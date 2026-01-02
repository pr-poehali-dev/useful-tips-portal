import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToTips = () => {
    const element = document.getElementById('tips');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Полезные советы<br />на каждый день
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Практичные рекомендации, которые помогут улучшить вашу жизнь. 
            Находите ответы на важные вопросы легко и быстро.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button onClick={scrollToTips} size="lg" className="text-base">
              Смотреть советы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              onClick={() => document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              size="lg" 
              className="text-base"
            >
              Подписаться
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in">
            <Icon name="BookOpen" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">500+ советов</h3>
            <p className="text-sm text-foreground/70">Большая база знаний на разные темы</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <Icon name="Search" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Быстрый поиск</h3>
            <p className="text-sm text-foreground/70">Найдите нужный совет за секунды</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Icon name="Heart" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Проверено</h3>
            <p className="text-sm text-foreground/70">Только практичные рекомендации</p>
          </div>
        </div>
      </div>
    </section>
  );
}
