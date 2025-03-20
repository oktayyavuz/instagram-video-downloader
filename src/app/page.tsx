"use client";

import { InstagramVideoForm } from "@/features/instagram/components/form";
import { Download, Github, Instagram, Twitter, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
      <main className="flex-grow pt-4 pb-8 md:pt-6 md:pb-12 px-3 md:px-4 lg:px-8 page-transition">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden mb-6 md:mb-12 hover-lift shimmer">
            <div className="p-5 md:p-8 lg:p-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-5 md:mb-0 md:pr-6 lg:pr-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
                  Instagram Video İndirici
                </h1>
                <p className="text-blue-100 text-sm md:text-base lg:text-lg">
                  Instagram videolarını yüksek kalitede, hızlı ve ücretsiz olarak indirebilirsiniz.
                </p>
                <div className="flex mt-4 md:mt-6 space-x-2 md:space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex items-center">
                    <Download className="h-4 w-4 md:h-5 md:w-5 text-white mr-1.5 md:mr-2" />
                    <span className="text-white text-xs md:text-sm">Kolay İndirme</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex items-center">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-white mr-1.5 md:mr-2" />
                    <span className="text-white text-xs md:text-sm">Yüksek Kalite</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white/15 backdrop-blur-md p-3 md:p-4 rounded-full">
                  <Download className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Ana İçerik */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-8">
            {/* Form Bölümü */}
            <div className="md:col-span-3 order-2 md:order-1">
              <InstagramVideoForm />
            </div>
            
            {/* Nasıl Kullanılır */}
            <div className="md:col-span-2 order-1 md:order-2 mb-5 md:mb-0">
              <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-6 h-full hover-lift gradient-border">
                <h3 className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 md:mb-4 flex items-center">
                  <span className="mr-2">🎯</span>
                  <span>Nasıl Kullanılır?</span>
                </h3>
                
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-bold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-xs md:text-sm">1</div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Instagram Linkini Kopyalayın</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">İndirmek istediğiniz Instagram video linkini kopyalayın</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-bold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-xs md:text-sm">2</div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Bağlantı Yapıştırın</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Video bağlantısını kutuya yapıştırın</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-bold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-xs md:text-sm">3</div>
                    <div>
                      <p className="font-medium text-sm md:text-base">İndirmeyi Başlatın</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">&ldquo;İndir&rdquo; butonuna tıklayın ve dosyanız otomatik olarak indirilecek</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    ⚠️ Not: İçerikleri yalnızca kişisel kullanım için indirin.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-6 md:mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-sm p-4 md:p-6 hover-lift gradient-border">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
              <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} | Oktay Yavuz tarafından geliştirilmiştir
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
                <a
                  href="https://github.com/oktayyavuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 md:gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs md:text-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                  <span>oktayyavuz</span>
                </a>
                
                <a
                  href="https://instagram.com/oktayyavuz_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 md:gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs md:text-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  <span>oktayyavuz_1</span>
                </a>
                
                <a
                  href="https://instagram.com/oktaywithdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 md:gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs md:text-sm"
                  aria-label="Instagram 2"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  <span>oktaywithdev</span>
                </a>
                
                <a
                  href="https://twitter.com/oktayyavuz_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 md:gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xs md:text-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  <span>oktayyavuz_0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
