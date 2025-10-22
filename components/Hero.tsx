import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              ЕКСКЛЮЗИВНО
            </div>
            
            <div className="space-y-2">
              <div className="text-lg text-gray-200">
                22:00, 22 жовтня | Студія 21:00
              </div>
            </div>

            {/* Team logos and match */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 my-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xs">RM</span>
                  </div>
                </div>
                <div className="text-sm text-gray-300">Реал Мадрид</div>
              </div>
              
              <div className="text-4xl font-bold text-white">VS</div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">J</span>
                  </div>
                </div>
                <div className="text-sm text-gray-300">Ювентус</div>
              </div>
            </div>

            {/* Champions League logo */}
            <div className="absolute top-20 right-8 hidden lg:block">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xs text-center font-bold">UEFA<br/>CHAMPIONS<br/>LEAGUE</span>
              </div>
            </div>
          </div>

          {/* Right content - Players */}
          <div className="relative">
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <div className="w-48 h-64 bg-gradient-to-b from-white/20 to-transparent rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 opacity-50"></div>
                </div>
              </div>
              <div className="relative">
                <div className="w-48 h-64 bg-gradient-to-b from-white/20 to-transparent rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-400 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom content cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 text-center">
            <div className="text-sm font-medium">Кіберспорт</div>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-4 text-center">
            <div className="text-sm font-medium">Прем'єра</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-4 text-center">
            <div className="text-sm font-medium">HBO MAX</div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 text-center">
            <div className="text-sm font-medium">Новинки</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero