'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Content() {
  return (
    <div className="bg-indigo-600 text-white">
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Profesyonel CV'nizi Hemen Oluşturun
      </h2>
      <p className="text-lg mb-8 text-indigo-100">
        Yapay zeka destekli platformumuz ile kariyerinizde fark yaratın.
      </p>
      <Link href="/generate">
        <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6 rounded-lg text-lg">
          CV Oluşturmaya Başla
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </div>
  );
}
