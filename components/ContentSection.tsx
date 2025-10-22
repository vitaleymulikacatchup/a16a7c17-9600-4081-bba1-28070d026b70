import { ChevronRight } from 'lucide-react'
import ContentCard from './ContentCard'

interface ContentSectionProps {
  title: string
  items: number
}

const ContentSection = ({ title, items }: ContentSectionProps) => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="content-grid">
        {Array.from({ length: items }).map((_, index) => (
          <ContentCard key={index} />
        ))}
      </div>
    </section>
  )
}

export default ContentSection