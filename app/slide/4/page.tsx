import SlideLayout from '@/components/slide-layout'
import { Wallet, FileCheck, Building2, Truck } from 'lucide-react'

export default function Slide4() {
  return (
    <SlideLayout slideNumber={4} totalSlides={5}>
      <div className="flex flex-col items-center gap-12 py-8">
        <h1 className="text-4xl">Praktische Anwendungen</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="flex items-center gap-4 p-6 border rounded-lg">
            <Wallet className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl mb-2">Digitale Zahlungen</h2>
              <p>Schnelle und sichere Überweisungen ohne Mittelsmann</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 border rounded-lg">
            <FileCheck className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl mb-2">Smart Contracts</h2>
              <p>Automatisierte Verträge und Vereinbarungen</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 border rounded-lg">
            <Building2 className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl mb-2">Immobilien</h2>
              <p>Transparente Eigentumsnachweise und Transfers</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 border rounded-lg">
            <Truck className="w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl mb-2">Lieferketten</h2>
              <p>Nachverfolgbare und fälschungssichere Logistik</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
