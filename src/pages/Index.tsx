import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Nordic Light',
    price: '12 990 ₽',
    description: 'Минималистичный столик из светлого дуба с простым механизмом складывания',
    image: 'https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/cbca2d07-8640-4e21-a8d3-55f022656c9d.jpg',
    features: ['Материал: массив дуба', 'Размеры: 80×50×45 см', 'Вес: 6 кг', 'Скандинавский стиль']
  },
  {
    id: 2,
    name: 'Urban Black',
    price: '15 490 ₽',
    description: 'Современный столик с металлическим каркасом и столешницей из ореха',
    image: 'https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/4b1537f5-728b-466e-89b6-82e721e16458.jpg',
    features: ['Материал: металл + орех', 'Размеры: 90×60×50 см', 'Вес: 8 кг', 'Индустриальный стиль']
  },
  {
    id: 3,
    name: 'Marble Gold',
    price: '24 990 ₽',
    description: 'Премиальный столик с мраморной столешницей и золотыми ножками',
    image: 'https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/ff20a547-277f-421c-a009-2798bcc952b5.jpg',
    features: ['Материал: мрамор + латунь', 'Размеры: 100×60×48 см', 'Вес: 12 кг', 'Люкс дизайн']
  }
];

export default function Index() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          "name": "FoldTable - Складные журнальные столики",
          "description": "Магазин премиальных складных журнальных столиков с минималистичным дизайном",
          "url": typeof window !== 'undefined' ? window.location.href : '',
          "image": products[0].image,
          "priceRange": "12990-24990 RUB",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "RU"
          }
        })}
      </script>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">FoldTable</h1>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О продукте
              </button>
              <button onClick={() => scrollToSection('delivery')} className="text-sm font-medium hover:text-primary transition-colors">
                Доставка
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/30a36c19-04eb-4f74-80c0-8c33bd46b0d8.jpg)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          </div>
          <div className="container mx-auto px-4 text-center z-10 relative">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white drop-shadow-2xl">
              Складные столики
              <br />
              <span className="text-primary">нового поколения</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Минималистичный дизайн, компактное хранение, максимум стиля
            </p>
            <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg px-8 shadow-2xl">
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Наши модели</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Каждый столик создан с учётом современных требований к функциональности и эстетике
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <article key={product.id} itemScope itemType="https://schema.org/Product">
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="aspect-square overflow-hidden bg-gray-50">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        itemProp="image"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 itemProp="name" className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p itemProp="description" className="text-muted-foreground mb-4">{product.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Icon name="Check" className="mr-2 text-primary" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between">
                        <span itemProp="offers" itemScope itemType="https://schema.org/Offer" className="text-3xl font-bold">
                          <span itemProp="price">{product.price}</span>
                          <meta itemProp="priceCurrency" content="RUB" />
                        </span>
                        <Button onClick={() => setSelectedProduct(product)}>
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Галерея</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Наши столики в реальных интерьерах наших клиентов
            </p>

            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/dc443c14-796d-4a6f-a08a-023de190957c.jpg" 
                    alt="Nordic Light в скандинавском интерьере"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/9cab5dcb-9698-45ba-a5a5-d18f0e30678d.jpg" 
                    alt="Nordic Light в солнечной квартире"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/07bebeee-cb1c-4d80-9a73-afdfbd0f8c6d.jpg" 
                    alt="Nordic Light крупным планом"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/dc443c14-796d-4a6f-a08a-023de190957c.jpg"
                  >
                    <source src="/videos/nordic-light-demo.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео
                  </video>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold mb-4">Nordic Light</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Воплощение скандинавского минимализма в складной мебели. Светлый дуб создаёт атмосферу уюта, 
                    а продуманный механизм позволяет легко трансформировать пространство. Идеальное решение для тех, 
                    кто ценит функциональность и чистоту линий.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-primary">12 990 ₽</span>
                  </div>
                  <Button size="lg" className="w-full" onClick={() => setSelectedProduct(products[0])}>
                    Заказать Nordic Light
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/66d03758-d97e-4c8d-b945-b28a4a97772a.jpg" 
                    alt="Urban Black в индустриальном лофте"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/4b237ba5-673a-48ca-8d2c-de6ba79d9f26.jpg" 
                    alt="Urban Black в городской квартире"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/2e6cce36-b2a0-4d29-98ec-31b1f8ec46f7.jpg" 
                    alt="Urban Black детали"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold mb-4">Urban Black</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Брутальность металла встречается с благородством ореха. Индустриальный стиль для современных 
                    городских интерьеров. Прочная конструкция и геометричные формы создают характер, 
                    а механизм трансформации работает безупречно.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-primary">15 490 ₽</span>
                  </div>
                  <Button size="lg" className="w-full" onClick={() => setSelectedProduct(products[1])}>
                    Заказать Urban Black
                  </Button>
                </div>
                
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/66d03758-d97e-4c8d-b945-b28a4a97772a.jpg"
                  >
                    <source src="/videos/urban-black-demo.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео
                  </video>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/2f43d5bc-8ebf-4b15-aa2e-f0346a2ad454.jpg" 
                    alt="Marble Gold в пентхаусе"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/1e10eb4e-53be-4e8d-aacd-f85b7eac07ae.jpg" 
                    alt="Marble Gold детали мрамора"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/c290841d-6ec3-4e3a-be29-e388dbee341f.jpg" 
                    alt="Marble Gold в роскошной квартире"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="https://cdn.poehali.dev/projects/be45f5ed-5c1f-464e-94cd-bba3e3ef23a3/files/2f43d5bc-8ebf-4b15-aa2e-f0346a2ad454.jpg"
                  >
                    <source src="/videos/marble-gold-demo.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео
                  </video>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-3xl font-bold mb-4">Marble Gold</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Роскошь и элегантность премиум-класса. Натуральный мрамор в сочетании с золотыми акцентами — 
                    выбор тех, кто не идёт на компромиссы. Каждый столик уникален благодаря естественному рисунку камня. 
                    Украшение любого интерьера высокого уровня.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-primary">24 990 ₽</span>
                  </div>
                  <Button size="lg" className="w-full" onClick={() => setSelectedProduct(products[2])}>
                    Заказать Marble Gold
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">О продукте</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Minimize2" className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Компактность</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Наши столики складываются до минимального размера, что делает их идеальными для современных квартир. 
                    Храните их в шкафу или за диваном когда они не нужны.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Palette" className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Дизайн</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Минималистичная эстетика и чистые линии идеально вписываются в любой современный интерьер. 
                    Каждая деталь продумана до мелочей.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Shield" className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Качество</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Используем только премиальные материалы: массив дерева, натуральный мрамор и прочный металл. 
                    Гарантия 5 лет на все модели.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Zap" className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">Простота</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Механизм складывания работает плавно и не требует усилий. 
                    Разложить или сложить столик можно за 3 секунды одной рукой.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Доставка и оплата</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Truck" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Бесплатная доставка</h3>
                        <p className="text-muted-foreground">
                          По Москве и Санкт-Петербургу доставка бесплатная при заказе от 10 000 ₽. 
                          Доставим в удобное для вас время в течение 2-3 дней.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Доставка по России</h3>
                        <p className="text-muted-foreground">
                          Отправляем в любой город транспортными компаниями. 
                          Стоимость доставки рассчитывается индивидуально в зависимости от региона.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="CreditCard" className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Способы оплаты</h3>
                        <p className="text-muted-foreground">
                          Принимаем оплату банковскими картами, через СБП, наличными при получении. 
                          Возможна рассрочка от банков-партнёров.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Контакты</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:info@foldtable.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@foldtable.ru
                  </a>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Вс: 10:00 - 21:00
                  </p>
                </div>
              </div>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
                  <p className="text-muted-foreground mb-6">
                    Свяжитесь с нами любым удобным способом, и мы поможем вам выбрать идеальный столик
                  </p>
                  <Button size="lg" className="px-8">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Написать в WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">FoldTable</h3>
              <p className="text-sm opacity-90">Складные столики премиум-класса</p>
            </div>
            
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('catalog')} className="text-sm hover:opacity-80 transition-opacity">
                Каталог
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm hover:opacity-80 transition-opacity">
                Галерея
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:opacity-80 transition-opacity">
                О нас
              </button>
              <button onClick={() => scrollToSection('delivery')} className="text-sm hover:opacity-80 transition-opacity">
                Доставка
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:opacity-80 transition-opacity">
                Контакты
              </button>
            </div>
          </div>
          
          <Separator className="my-8 opacity-20" />
          
          <div className="text-center text-sm opacity-75">
            <p>© 2024 FoldTable. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
          <Card className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
                <button onClick={() => setSelectedProduct(null)} className="p-2 hover:bg-gray-100 rounded-full">
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              
              <p className="text-muted-foreground mb-4">{selectedProduct.description}</p>
              <p className="text-3xl font-bold mb-6">{selectedProduct.price}</p>
              
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Написать в WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}