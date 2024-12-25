import { Card } from '@/components/ui/card';
import { Sparkles, FileText, Zap, Shield, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">AI Destekli CV Oluşturucu Hakkında</h1>
          <p className="text-lg text-gray-600">
            Modern iş dünyası için yapay zeka destekli, profesyonel CV oluşturma aracı
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Destekli İyileştirme</h3>
                <p className="text-gray-600">
                  Yapay zeka teknolojisi ile metinlerinizi profesyonel bir dille otomatik olarak iyileştirir ve CV'nizi öne çıkarır.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Modern Tasarım</h3>
                <p className="text-gray-600">
                  İşverenler tarafından tercih edilen, profesyonel ve modern CV şablonları ile öne çıkın.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Hızlı ve Kolay</h3>
                <p className="text-gray-600">
                  Kullanıcı dostu arayüz ile dakikalar içinde profesyonel CV'nizi oluşturun.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Güvenli ve Özel</h3>
                <p className="text-gray-600">
                  Verileriniz güvenle saklanır ve sadece CV oluşturma amacıyla kullanılır.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Nasıl Çalışır?</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <p className="text-gray-700">Kişisel bilgilerinizi, eğitim ve iş deneyimlerinizi girin.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <p className="text-gray-700">AI teknolojimiz ile metinlerinizi profesyonel bir dille iyileştirin.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <p className="text-gray-700">Modern tasarımlı CV'nizi PDF formatında indirin.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Hemen Başlayın</h2>
          <p className="text-gray-600 mb-6">
            Profesyonel CV'nizi oluşturmak için yapay zeka destekli platformumuzu kullanın.
          </p>
          <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            <Clock className="w-5 h-5" />
            <span>CV Oluştur</span>
          </div>
        </div>
      </div>
    </div>
  );
}
