'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const advantages = [
  {
    title: 'Hızlı ve Kolay Kullanım',
    description: 'Dakikalar içinde profesyonel CV\'ler oluşturun ve iş başvurularınızı hızlandırın.',
    icon: '🚀',
  },
  {
    title: 'AI Destekli Tavsiyeler',
    description: 'Yapay zeka destekli önerilerle CV\'nizi daha etkili hale getirin.',
    icon: '🤖',
  },
  {
    title: 'Özelleştirilebilir Şablonlar',
    description: 'Birbirinden şık ve profesyonel şablonlar arasından seçim yapın.',
    icon: '🎨',
  },
  {
    title: 'Kolay Paylaşım',
    description: 'CV\'nizi PDF formatında indirin veya doğrudan paylaşın.',
    icon: '📤',
  },
];

export default function MarketingSlider() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Avantajlarımız</h2>
        
        <Carousel>
          <CarouselContent>
            {advantages.map((advantage, index) => (
              <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/4 px-2">
                <Card className="h-[250px] flex flex-col justify-between shadow-md">
                  <CardHeader>
                    <div className="text-4xl">{advantage.icon}</div>
                    <CardTitle className="text-lg font-semibold mt-2">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="flex justify-center mt-6">
          <Button className="flex items-center gap-2">
            Daha Fazla Bilgi <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
