import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">Videoİndir</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Instagram videolarını kolay ve hızlı bir şekilde indirin. Tamamen ücretsizdir.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/oktayyavuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Kaynak Kodu
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-4">Sosyal Medya</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/oktayyavuz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </Link>
              <Link
                href="https://instagram.com/oktayyavuz_1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </Link>
              <Link
                href="https://instagram.com/oktaywithdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Instagram Dev"
              >
                <FaInstagram className="text-2xl" />
              </Link>
              <Link
                href="https://twitter.com/oktayyavuz_0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Videoİndir. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
            <span className="mr-1">Oktay Yavuz tarafından</span> 
            <FaHeart className="text-red-500 mx-1" />
            <span>ile yapılmıştır</span>
          </p>
        </div>
      </div>
    </footer>
  );
} 