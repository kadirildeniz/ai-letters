'use client';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Content() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-t from-white to-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          AI Destekli CV Oluşturucu ile Geleceğe Hazır Olun
        </h1>

        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Profesyonel ve etkileyici CV'ler oluşturmak hiç bu kadar kolay olmamıştı. AI teknolojisinin gücünü kullanarak kariyer hedeflerinize bir adım daha yaklaşın.
        </p>

        <Separator className="my-8" />

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">🌟 Neden Biz?</h2>
            <p className="text-gray-600">
              AI destekli sistemimiz, özgeçmişlerinizi analiz eder ve işverenlerin dikkatini çekecek şekilde optimize eder. 
              Gelişmiş algoritmalarımız sayesinde doğru bilgiyi doğru şekilde sunarsınız.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">🚀 Hızlı ve Etkili</h2>
            <p className="text-gray-600">
              Kullanıcı dostu arayüzümüz ve güçlü yapay zeka motorumuz sayesinde dakikalar içinde profesyonel CV'ler oluşturabilirsiniz.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">🔒 Güvenlik ve Gizlilik</h2>
            <p className="text-gray-600">
              Kişisel verileriniz bizim için önemlidir. Verileriniz güvenle saklanır ve üçüncü taraflarla paylaşılmaz.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">📈 Kariyerinizi Bir Üst Seviyeye Taşıyın</h2>
            <p className="text-gray-600">
              Profesyonel şablonlar ve kişiye özel öneriler ile kariyerinizde fark yaratın. AI destekli analizlerle güçlü yönlerinizi vurgulayın.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center mt-12">
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Hemen Başlayın ve İlk CV'nizi Oluşturun!
          </h3>
          <Link href="/generate" className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">Ücretsiz Deneyin</Link>
        </div>
      </div>
    </section>
  );
}
