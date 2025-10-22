'use client'

import { useState, useEffect } from 'react'

const AgeVerificationModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after a short delay to simulate the behavior
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 max-w-md mx-4 text-center animate-slide-up">
        {/* Mascot illustration */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
            <div className="w-16 h-16 bg-purple-400 rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          Підтвердження віку
        </h2>
        
        <p className="text-white/90 mb-6 leading-relaxed">
          Продовжуючи користуватися MEGOGO, ви підтверджуєте, що вам виповнилося 21 рік, та погоджуєтеся із Угодою користувача та Політикою конфіденційності
        </p>
        
        <button 
          onClick={() => setIsOpen(false)}
          className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-200"
        >
          Підтверджую
        </button>
      </div>
    </div>
  )
}

export default AgeVerificationModal