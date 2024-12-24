'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-t from-gray-100 to-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-8">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Destekli CV Oluşturucu
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 max-w-md">
            AI teknolojisi ile profesyonel CV'ler oluşturun, iş başvurularınızı güçlendirin ve kariyerinizde bir adım öne geçin. Hemen deneyin ve farkı hissedin!
          </p>
          <Link href="/generate" className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">Hemen Başla</Link>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/cv-one.png"
            alt="AI Destekli CV Oluşturucu"
            width={500}
            height={400}
            className="rounded-lg shadow-lg h-[400px] object-cover object-top"
          />
        </div>
        
      </div>
    </section>
  );
}
