'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-indigo-900">CV Builder</h3>
            <p className="text-gray-600">
              Yapay zeka destekli profesyonel CV oluşturma platformu
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-indigo-900 mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Hakkında
                </Link>
              </li>
              <li>
                <Link href="/generate" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  CV Oluştur
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-indigo-900 mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-600">
              <li>info@cvbuilder.com</li>
              <li>+90 (555) 123 45 67</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-indigo-900 mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-indigo-100">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} CV Builder. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
