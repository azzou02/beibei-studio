import Image from 'next/image'
import Link from 'next/link'

export default function FashionPage() {
  return (
    <main className="mx-auto py-12 px-8">
      {/* — Header: “Fashion” + envelope */}
      <div className="grid grid-cols-3 mx-4 items-start">
        <h1 className="text-title leading-tight ml-4 -mt-6">
          Fashion
        </h1>
        
        <div className="col-span-2 justify-self-end">
          <Image
            src="/images/fashion/envelope.jpg"
            alt="Envelope"
            width={770}
            height={500}
            className="object-cover mt-2 rotate-[5deg]"
          />
        </div>
      </div>

      <div className="absolute top-73 left-30 mx-auto w-[580px] h-[420px]">
        <Image
            src="/images/fashion/post-card.jpg"
            alt="Postcard"
            fill
            className="object-contain"
        />
        <div className="absolute max-w-md inset-0 flex items-center ml-20 px-6 z-20">
          <p className="text-xl italic leading-snug text-left">
            Exploration of sustainability, innovation, and business of the fashion industry
          </p>
        </div>
      </div>
      
      <Image
          src="/images/fashion/paris-stamp.jpg"
          alt="Eiffel Tower stamp"
          width={120}
          height={120}
          className="absolute bottom-40 left-185 rotate-[10deg]"
      />

      <Image
          src="/images/fashion/italia-stamp.jpg"
          alt="Italia stamp"
          width={120}
          height={120}
          className="absolute bottom-35 left-155 rotate-[-11deg]"
      />

      {/* — Call‑to‑action */}
      <div className="mt-20 mr-10 text-right">
        <Link
          href="/fashion/journal"
          className="italic text-lg hover:underline"
        >
          lets take a look at the journal
        </Link>
      </div>
    </main>
  )
}
