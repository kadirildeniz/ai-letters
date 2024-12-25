'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';


export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI Destekli CV Oluşturucu ile Kariyerinizi Öne Çıkarın
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Yapay zeka teknolojimiz ile profesyonel CV'nizi dakikalar içinde oluşturun. 
            Modern tasarım ve akıllı içerik önerileriyle iş başvurularınızda fark yaratın.
          </p>
          <div className="flex gap-4">
            <Link href="/generate">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-lg text-lg">
                Hemen Başla
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="px-8 py-6 rounded-lg text-lg border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                Daha Fazla Bilgi
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/cv-one.png"
            alt="CV Örneği"
            width={600}
            height={800}
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute -top-4 -right-4 bg-indigo-600 text-white p-4 rounded-lg shadow-lg">
            <Sparkles className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
