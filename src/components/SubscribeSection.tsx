import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, введите корректный email',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Спасибо за подписку!',
      description: 'Мы отправим вам самые полезные советы',
    });
    
    setEmail('');
  };

  return (
    <section id="subscribe" className="py-20 px-6 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Icon name="Mail" size={32} className="text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Подпишитесь на рассылку
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Получайте лучшие советы каждую неделю прямо на почту
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base flex-1"
            />
            <Button type="submit" size="lg" className="h-12 px-8">
              Подписаться
            </Button>
          </div>
          <p className="text-xs text-foreground/50 text-center mt-4">
            Никакого спама. Только полезный контент.
          </p>
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <Icon name="CheckCircle" size={24} className="text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Еженедельная рассылка</p>
          </div>
          <div className="p-4">
            <Icon name="Star" size={24} className="text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Эксклюзивные советы</p>
          </div>
          <div className="p-4">
            <Icon name="Gift" size={24} className="text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Бонусный контент</p>
          </div>
        </div>
      </div>
    </section>
  );
}
