const PrivacyPolicyPage = () => {
  return (
    <div className="my-4 flex flex-col rounded-lg border p-8">
      <h1 className="mb-4 text-2xl font-bold">Gizlilik Politikası</h1>

      <section className="text-sm">
        <h2 className="mb-2 text-xl font-semibold">1. Giriş</h2>
        <p className="mb-2">
          <span className="font-semibold">1.1.</span> Bu Gizlilik Politikası,
          <span className="text-gray-900 dark:text-gray-500">
            {" "}
            (https://ytdl.oktaydev.online)
          </span>{" "}
          web sitesinin hiçbir kişisel bilgi toplamadığını, saklamadığını veya
          işlemediğini kullanıcılara bildirmektedir. Web sitesini veya hizmeti
          kullanarak, hiçbir kişisel bilginin toplanmadığını veya saklanmadığını
          kabul etmiş olursunuz.
        </p>
        <p className="mb-2">
          <span className="font-semibold">1.2.</span> Web sitesi veya hizmet
          herhangi bir kişisel bilgi toplamamasına veya saklamamasına rağmen,
          bu politika yasal gereklilikler doğrultusunda sağlanmaktadır.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">
          2. Üçüncü Taraf Reklamcılık ve Analitik
        </h2>
        <p className="mb-2">
          <span className="font-semibold">2.1.</span> Web sitesinde reklam göstermek
          için Google AdSense gibi üçüncü taraf reklam hizmetlerini kullanıyoruz.
          Bu üçüncü taraflar, IP adresiniz, tarayıcı türünüz, internet servis
          sağlayıcınız, yönlendiren/çıkış sayfaları ve tarih/saat damgası dahil
          olmak üzere web sitesi ve diğer web sitelerini kullanımınız hakkında
          bilgi toplamak için çerezler, web işaretçileri ve diğer izleme
          teknolojilerini kullanabilir. Daha fazla bilgi için lütfen
          <a
            target="_blank"
            href="https://www.privacypolicies.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            privacypolicies.com{" "}
          </a>
          ve
          <a
            target="_blank"
            href="https://www.termsfeed.com/blog/privacy-policy-google-adsense/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            termsfeed.com{" "}
          </a>
          adreslerini ziyaret edin.
        </p>
        <p className="mb-2">
          <span className="font-semibold">2.2.</span> Kişiselleştirilmiş reklamları
          <a
            target="_blank"
            href="https://adssettings.google.com/authenticated"
            className="text-blue-600 hover:underline"
          >
            {" "}
            Reklam Ayarları{" "}
          </a>
          sayfasını veya
          <a
            target="_blank"
            href="https://www.aboutads.info/"
            className="text-blue-600 hover:underline"
          >
            {" "}
            www.aboutads.info
          </a>
          adresini ziyaret ederek devre dışı bırakabilirsiniz.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">
          3. Gizlilik Politikası Değişiklikleri
        </h2>
        <p className="mb-2">
          <span className="font-semibold">3.1.</span> Web sitesinde güncellenmiş
          Politikayı yayınlayarak, Politikanın herhangi bir bölümünü istediğimiz
          zaman güncelleme, değiştirme veya değiştirme hakkını saklı tutarız.
          Güncellenmiş Politikanın yürürlüğe girme tarihinden sonra Web sitesini
          veya Hizmeti kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz
          anlamına gelir.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">4. İletişim Bilgileri</h2>
        <p className="mb-2">
          <span className="font-semibold">4.1.</span> Bu Politika hakkında herhangi
          bir sorunuz veya endişeniz varsa, lütfen web sitesi sahibiyle{" "}
          <span className="italic">oktayyavuz220@gmail.com</span> adresinden
          iletişime geçin.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <h2 className="mb-2 text-xl font-semibold">
          5. Gizlilik Politikasının Kabulü
        </h2>
        <p>
          Web sitesine erişerek veya Hizmeti kullanarak, bu Politikanın şart ve
          koşullarını okuduğunuzu, anladığınızı ve bunlara bağlı kalmayı kabul
          ettiğinizi beyan edersiniz.
        </p>
      </section>

      <section className="mb-2 text-sm">
        <p className="text-red-500">
          <span className="font-semibold">Not:</span> Bu metin yapay zeka
          tarafından oluşturulmuştur.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
