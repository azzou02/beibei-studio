import Image from "next/image";
import Link from "next/link";
import { AnimatedCarousel } from "../components/AnimatedCarousel";

export default function AboutPage() {
  return (
    <>
    <div className="pb-40">
      <section className="grid grid-cols-3 gap-8 mb-10 mt-2 px-8 items-center">
          {/* Left collage */}
          <div className="flex justify-end pl-4">
            <Image
              src="/images/about/magazine-page.jpg"
              alt="Fashion magazine"
              width={400}
              height={260}
              className="object-contain"
            />
          </div>

          {/* Center laptop */}
          <div className="flex justify-start pl-8 pt-2">
            <Image
              src="/images/about/laptop.png"
              alt="Laptop"
              width={290}
              height={260}
              className="object-contain"
            />
          </div>

          <div className="text-right mt-10">
            <h1 className="text-title leading-35">
                Claudia<br />Studio
            </h1>
          </div>
       
      </section>

      <section className="flex justify-between mx-12">
          {/* F1 Car Image */}
          <Image
              src="/images/about/mclaren-car.png"
              alt="McLaren Formula 1 Car"
              width={500}
              height={200}
              className="object-contain pl-10"
          />
          {/* Welcome Text */}
          <p className="text-right italic lowercase text-xl max-w-1/2 leading-8">
              hello~ welcome to claudia studio here is where i 
              record my thoughts and reflections on different interest 
              and topics like sports and fashions! enjoy and explore
          </p>
      </section>

  

        {/* ——— Infinite Bottom Carousel ——— */}
        <AnimatedCarousel />

    </div>

    </>
  );
}
