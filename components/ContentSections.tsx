import ContentSection from './ContentSection'

const ContentSections = () => {
  const sections = [
    {
      title: 'Зірки та новинки',
      items: 6
    },
    {
      title: 'Прем\'єри в стрічці та прем\'єрному',
      items: 6
    },
    {
      title: 'Прем\'єри',
      items: 6
    },
    {
      title: 'У відпустці дивитися',
      items: 6
    },
    {
      title: 'Топ серіали MEGOGO',
      items: 6
    },
    {
      title: 'Топи серіали Netflix',
      items: 6
    },
    {
      title: 'Топи серіали в категорії',
      items: 6
    },
    {
      title: 'Що нове дивитися',
      items: 6
    },
    {
      title: 'Серіали HBO',
      items: 6
    },
    {
      title: 'Популярні серіали історії',
      items: 6
    }
  ]

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 space-y-12">
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
        
        {/* Special section for age verification */}
        <div className="py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Вибірково за віком - дивитися за реєстрацією</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentSections