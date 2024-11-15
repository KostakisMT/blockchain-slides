import SlideLayout from '@/components/slide-layout'

export default function Slide1() {
  return (
    <SlideLayout slideNumber={1} totalSlides={5}>
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-5xl font-bold italic mb-8">
          Was ist eine Blockchain?
        </h1>
        <h2 className="text-2xl font-bold">
          Eine Einführung in die Technologie der Zukunft
        </h2>
      </div>
    </SlideLayout>
  )
}
