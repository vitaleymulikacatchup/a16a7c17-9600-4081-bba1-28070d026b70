import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Користувачам і партнерам',
      links: [
        'Все про передплати',
        'Програма лояльності',
        'Активувати промокод',
        'Угода користувача',
        'Політика конфіденційності',
        'Доступність',
        'Про нас',
        'Розваження MEGOGO разом',
        'Спосіб оплати',
        'Вакансії',
        'MEGOGO BOOKS',
        'Листівки близьким на MEGOGO'
      ]
    },
    {
      title: 'Партнери',
      links: [
        'Вихідні',
        'Структура',
        'Контакти',
        'Гайдлайн',
        'Передплата',
        'Онлайн',
        'Додати',
        'Партнери',
        'Дистрибуція передплат'
      ]
    },
    {
      title: 'Підтримка користувачів',
      links: [
        'Усі контакти',
        'Питання та відповіді'
      ]
    }
  ]

  return (
    <footer className="bg-dark-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-gray-300">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Підтримка користувачів</h3>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-white mb-1">0 800 60 12 34</div>
                <div className="text-sm text-gray-400">За дзвінки з мобільного та міського безкоштовно</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm text-gray-400">+380 93 555 51 25</div>
                <div className="text-sm text-gray-400">+380 67 555 51 25</div>
              </div>
              <div className="text-sm text-gray-400">support@megogo.net</div>
            </div>
          </div>
        </div>
        
        {/* App downloads */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Наші застосунки</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-600 rounded"></div>
              <div>
                <div className="text-xs text-gray-400">Available for</div>
                <div className="text-sm font-medium">Smart TV</div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-600 rounded"></div>
              <div>
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="text-sm font-medium">App Store</div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-600 rounded"></div>
              <div>
                <div className="text-xs text-gray-400">GET IT ON</div>
                <div className="text-sm font-medium">Google Play</div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-600 rounded"></div>
              <div>
                <div className="text-xs text-gray-400">DOWNLOAD ON THE</div>
                <div className="text-sm font-medium">AppGallery</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social media */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Ми в соцмережах</h3>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">© 2025 MEGOGO. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer