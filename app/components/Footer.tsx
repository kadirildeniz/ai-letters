'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-lg font-thin mb-2 block">AI CV Oluşturucu</span>
          <p className="text-sm">
            AI destekli CV oluşturma platformu ile kariyerinizde bir adım öne geçin. Profesyonel ve etkili CV'ler hazırlamak artık çok kolay.
          </p>
        </div>
        
        {/* Bölüm 2: Hızlı Erişim */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">Hızlı Erişim</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-white transition-colors">Özellikler</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white transition-colors">Fiyatlandırma</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">İletişim</Link>
            </li>
          </ul>
        </div>
        
        {/* Bölüm 3: Sosyal Medya */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">Bizi Takip Edin</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-6 h-6 hover:text-white transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-6 h-6 hover:text-white transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-6 h-6 hover:text-white transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-6 h-6 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Çizgi ve Telif Hakkı */}
      <div className=" mt-8 pb-8 pt-4 text-center text-sm opacity-50">
        <p>&copy; {new Date().getFullYear()} CV.ai. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
