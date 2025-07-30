import Image from "next/image";
import Link from "next/link";

export default function ArtPage() {
    return (
      <div className="mx-auto py-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-10 mt-2 px-4 md:px-8 items-start">
            <div className="flex flex-col justify-start ml-2 space-y-2 order-2 lg:order-1">
                <Image
                    src="/images/art/oil-paints-clear.png"
                    alt="oil paints"
                    width={500}
                    height={750}
                    className="object-contain w-full h-auto max-w-xl mx-auto lg:mx-0 hidden lg:block"
                />
                <p className="text-base md:text-lg leading-7 md:leading-8 mt-4 lg:mt-25 pr-0 lg:pr-4 hidden lg:block">
                    please click on the sketchbook to look at my work catalog, 
                    composing of works from oil paintings to graphic and computer 
                    work
                </p>
            </div>

            <div className="flex justify-start order-1 lg:order-2">
                <section className="grid grid-rows-2 gap-2 items-center">
                    <div className="text-left">
                        <h1 className="text-title leading-none -mt-4 lg:-mt-14">
                            Art
                        </h1>
                    </div>
                    
                    <p className="text-lg italic leading-7 md:leading-9 pr-0 lg:pr-8 -mt-2">
                        i’ve been actively involved in this subject since primary 
                        school (doodling) and started learning traditionally in 
                        high school (with oil paint). i will admit i still have a 
                        hard time understanding abstract and contemporary art. but 
                        i like to learn about them as they record history.
                    </p>

                    <div className="flex justify-center mt-20">
                        <Link href="/art/catalog" className="block  
                                                             drop-shadow-none 
                                                             hover:drop-shadow-xl/25  
                                                             transition         
                                                             duration-200">
                            <Image
                                src="/images/art/sketchbook.jpg"
                                alt="sketchbook"
                                width={600}
                                height={700}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </section>
            </div>

            <div className="order-3 lg:hidden px-4">
                <p className="leading-7 text-left mt-4">
                    please click on the sketchbook to look at my work catalog, 
                    composing of works from oil paintings to graphic and computer 
                    work
                </p>
            </div>
            
        </section>
        
      </div>
    )
}