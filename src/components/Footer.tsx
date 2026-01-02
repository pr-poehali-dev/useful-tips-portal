import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Lightbulb" size={24} className="text-primary" />
              <span className="text-xl font-bold">Советы</span>
            </div>
            <p className="text-background/70 text-sm">
              Практичные советы на каждый день для улучшения качества жизни
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:text-primary transition-colors">
                  Советы
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-primary transition-colors">
                  Категории
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Продуктивность</li>
              <li>Здоровье</li>
              <li>Саморазвитие</li>
              <li>Психология</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@sovety.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-background/70 mb-4 md:mb-0">
            © 2026 Советы. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm text-background/70">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
