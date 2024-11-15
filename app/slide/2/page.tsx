import SlideLayout from '@/components/slide-layout'
import { Database, Hash, Network } from 'lucide-react'

export default function Slide2() {
  return (
    <SlideLayout slideNumber={2} totalSlides={5}>
      <div className="flex flex-col items-center gap-12 py-8">
        <h1 className="text-4xl">Die wichtigsten Begriffe</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="flex flex-col items-center gap-4 p-6 border rounded-lg">
            <Database className="w-12 h-12" />
            <h2 className="text-2xl">Block</h2>
            <p className="text-center">Ein Container für Transaktionen, der kryptographisch mit anderen Blöcken verkettet ist</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 p-6 border rounded-lg">
            <Hash className="w-12 h-12" />
            <h2 className="text-2xl">Hash</h2>
            <p className="text-center">Eindeutiger digitaler Fingerabdruck, der die Daten im Block verschlüsselt</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 p-6 border rounded-lg">
            <Network className="w-12 h-12" />
            <h2 className="text-2xl">Dezentralisierung</h2>
            <p className="text-center">Verteilte Kontrolle über das Netzwerk ohne zentrale Autorität</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
