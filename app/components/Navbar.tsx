'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; 
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Özgeçmişlerim', href: '/resumes' },
  { name: 'Ayarlar', href: '/settings' },
  { name: 'Hakkımızda', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white py-2 dark:bg-gray-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-lg font-thin">AI CV Oluşturucu</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-gray-500'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Giriş Yap</Button>
          <Button>Kaydol</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href ? 'text-primary' : 'text-gray-500'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              <Button variant="outline">Giriş Yap</Button>
              <Button>Kaydol</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
