'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { FileText, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';


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
    <div className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold text-center mb-12">Neden Bizi Tercih Etmelisiniz?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <Card className="p-6 hover:shadow-lg transition-shadow border-indigo-100">
        <div className="p-3 bg-indigo-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">AI Destekli İçerik</h3>
        <p className="text-gray-600">
          Yapay zeka ile içeriklerinizi otomatik olarak profesyonel bir dille geliştirin.
        </p>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow border-indigo-100">
        <div className="p-3 bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <FileText className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Modern Tasarımlar</h3>
        <p className="text-gray-600">
          İşverenler tarafından tercih edilen profesyonel ve modern şablonlar.
        </p>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow border-indigo-100">
        <div className="p-3 bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          <CheckCircle className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Kolay Kullanım</h3>
        <p className="text-gray-600">
          Kullanıcı dostu arayüz ile dakikalar içinde profesyonel CV'nizi oluşturun.
        </p>
      </Card>
    </div>
  </div>
  );
}
