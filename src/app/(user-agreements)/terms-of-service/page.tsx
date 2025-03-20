import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Kullanım Koşulları | Instagram Video İndirici",
  description: "Instagram Video İndirici uygulamamızın kullanım koşulları."
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-3xl py-8 px-4">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span>Ana Sayfaya Dön</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Kullanım Koşulları</h1>

      <div className="prose prose-blue max-w-none dark:prose-invert">
        <p className="text-lg mb-4">
          Son güncelleme: {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Kabul Edilen Şartlar</h2>
        <p>
          Instagram Video İndirici (ytdl.oktaydev.online) hizmetini kullanarak, bu kullanım koşullarını kabul etmiş olursunuz. Eğer bu koşullarla aynı fikirde değilseniz, lütfen hizmetimizi kullanmayınız.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Hizmetin Kullanımı</h2>
        <p>
          Uygulamamız, sadece kişisel ve ticari olmayan kullanım için tasarlanmıştır. Instagram videolarını yalnızca telif hakkı sahibinin izni olduğu veya yasalarca izin verildiği durumlarda indirebilirsiniz.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Telif Hakkı ve İçerik Politikası</h2>
        <p>
          Kullanıcılar, telif hakkı yasalarını ihlal edecek şekilde uygulamamızı kullanmamalıdır. Telif hakkıyla korunan içerikleri izinsiz bir şekilde indirmek ve dağıtmak yasalara aykırı olabilir. İndirilen tüm içeriklerden kullanıcı sorumludur.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Hizmet Değişiklikleri</h2>
        <p>
          Herhangi bir zamanda, önceden bildirimde bulunmaksızın hizmetimizi değiştirme, askıya alma veya sonlandırma hakkını saklı tutarız.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sorumluluk Reddi</h2>
        <p>
          Uygulamamız "olduğu gibi" ve "mevcut olduğu gibi" sağlanmaktadır. Hizmetimizin kesintisiz, hatasız veya güvenli olacağını garanti etmiyoruz.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Tazminat</h2>
        <p>
          Kullanıcılar, hizmetimizin kullanımından kaynaklanan tüm talep, yükümlülük, zarar ve masraflardan bizi korumayı kabul eder.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Geçerli Yasalar</h2>
        <p>
          Bu koşullar, Türkiye Cumhuriyeti yasalarına tabidir ve bu yasalara göre yorumlanacaktır.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Bu Koşullardaki Değişiklikler</h2>
        <p>
          Bu Kullanım Koşullarını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik olduğunda, bu sayfada bildirimde bulunacağız.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. İletişim</h2>
        <p>
          Bu Kullanım Koşulları hakkında herhangi bir sorunuz varsa, lütfen oktayyavuz220@gmail.com adresinden bize ulaşın.
        </p>
      </div>
    </div>
  );
}
