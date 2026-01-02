import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Lightbulb" size={28} className="text-primary" />
            <span className="text-xl font-bold text-foreground">Советы</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-foreground/70'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('tips')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'tips' ? 'text-primary' : 'text-foreground/70'
              }`}
            >
              Советы
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'categories' ? 'text-primary' : 'text-foreground/70'
              }`}
            >
              Категории
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'contact' ? 'text-primary' : 'text-foreground/70'
              }`}
            >
              Контакты
            </button>
          </div>

          <Button onClick={() => scrollToSection('subscribe')} className="hidden md:inline-flex">
            Подписаться
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </div>
    </header>
  );
}
