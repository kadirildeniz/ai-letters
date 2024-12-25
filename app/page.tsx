import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import MarketingSlider from './components/MarketingSlider';
import Content from './components/Content';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
     <Hero />
    <MarketingSlider />
     <Content />
    </main>
  );
}
