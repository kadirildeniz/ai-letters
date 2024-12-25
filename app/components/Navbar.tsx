'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-indigo-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-indigo-600">CV Builder</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Hakkında
            </Link>
          </div>

          <Link href="/generate">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <FileText className="mr-2 h-4 w-4" />
              CV Oluştur
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
