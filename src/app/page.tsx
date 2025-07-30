import Image from "next/image";
import Link from "next/link";
import { AnimatedCarousel } from "../components/AnimatedCarousel";

export default function HomePage() {
  return (
    <>
    <div className="pb-40">
      {/* Hero Section - Responsive Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 
                          mb-10 mt-2 px-4 items-center">
          
          {/* Mobile: Title first, Desktop: Title last */}
          <div className="order-1 lg:order-3 text-center lg:text-right mt-4 lg:mt-10">
            <h1 className="text-7xl md:text-9xl lg:text-title leading-tight md:leading-25 lg:leading-35">
                <span className="md:hidden lg:hidden">Beibei Studio</span>
                <span className="hidden md:inline lg:inline">Beibei<br />Studio</span>
            </h1>
          </div>

          {/* Magazine image - visible on all screens */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end lg:pl-4">
            <Link href="/fashion" className="block drop-shadow-none hover:drop-shadow-xl/25  
                                             transition duration-200">
              <Image
                src="/images/about/magazine-page.jpg"
                alt="Fashion magazine"
                width={400}
                height={195}
                className="object-contain w-full max-w-[300px] md:max-w-[370px] lg:max-w-[500px] h-auto"
              />
            </Link>
          </div>

          {/* Laptop image - hidden on mobile */}
          <div className="order-3 lg:order-2 hidden lg:flex justify-center lg:justify-start lg:pl-8 lg:pt-2">
            <Link href="/tech" className="block drop-shadow-none hover:drop-shadow-xl/25  
                                          transition duration-200">
              <Image
                src="/images/about/laptop.png"
                alt="Laptop"
                width={220}
                height={195}
                className="object-contain w-full max-w-[220px] md:max-w-[250px] lg:max-w-[290px] h-auto"
              />
            </Link>
          </div>
       
      </section>

      {/* Second Section - Stack on mobile, hide F1 car on mobile */}
      <section className="flex flex-col md:flex-row justify-between items-center md:items-start 
                          mx-4 md:mx-8 lg:mx-12 gap-6 md:gap-8">
          
          {/* F1 Car Image */}
          <div className="hidden md:block w-full md:w-auto flex justify-center md:justify-start">
            <Link href="/sports" className="block drop-shadow-none hover:drop-shadow-xl/25  
                                            transition duration-200">
              <Image
                  src="/images/about/mclaren-car.png"
                  alt="McLaren Formula 1 Car"
                  width={500}
                  height={200}
                  className="object-contain w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px]
                            h-auto md:pl-0 lg:pl-10"
              />
            </Link>
          </div>
          
          {/* About Text */}
          <div className="w-full md:w-1/2 lg:max-w-1/2">
            <p className="text-left md:text-right italic lowercase text-base 
                          md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8 px-4 md:px-0">
                hello~ welcome to beibei studio here is where i 
                record my thoughts and reflections on different interest 
                and topics like sports and fashions! enjoy and explore
            </p>
          </div>
      </section>

      {/* Infinite Bottom Carousel */}
      <AnimatedCarousel />

    </div>
    </>
  );
}