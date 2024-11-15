import SlideLayout from '@/components/slide-layout'
import { Sparkles } from 'lucide-react'

export default function Slide5() {
  return (
    <SlideLayout slideNumber={5} totalSlides={5}>
      <div className="flex flex-col items-center gap-12 h-[60vh]">
        <h1 className="text-4xl">Ausblick in die Zukunft</h1>
        
        <div className="max-w-3xl space-y-8">
          <div className="flex items-center gap-6 p-6 border rounded-lg">
            <Sparkles className="w-12 h-12 flex-shrink-0" />
            <div>
              <h2 className="text-2xl mb-4">Potenzial der Blockchain</h2>
              <ul className="space-y-4">
                <li>• Vollständig digitalisierte Verwaltungsprozesse</li>
                <li>• Neue Formen der digitalen Zusammenarbeit</li>
                <li>• Energieeffizientere Konsensverfahren</li>
                <li>• Integration mit künstlicher Intelligenz</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
