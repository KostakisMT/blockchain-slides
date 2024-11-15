import SlideLayout from '@/components/slide-layout'

export default function Slide3() {
  return (
    <SlideLayout slideNumber={3} totalSlides={5}>
      <div className="flex flex-col items-center gap-12 h-[60vh]">
        <h1 className="text-4xl">Wie funktioniert eine Transaktion?</h1>
        
        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#35F1AB] flex items-center justify-center">1</div>
            <p>Nutzer initiiert eine neue Transaktion</p>
          </div>
          
          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#35F1AB] flex items-center justify-center">2</div>
            <p>Transaktion wird im Netzwerk verbreitet</p>
          </div>
          
          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#35F1AB] flex items-center justify-center">3</div>
            <p>Miner validieren die Transaktion</p>
          </div>
          
          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#35F1AB] flex items-center justify-center">4</div>
            <p>Transaktion wird in einem neuen Block gespeichert</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
