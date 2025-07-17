import Image from "next/image";
import Link from "next/link";

export default function ArtPage() {
    return (
      <div className="mx-auto py-12">
        <section className="grid grid-cols-2 gap-8 mb-10 mt-2 px-8 items-start">
            <div className="flex flex-col justify-start ml-2 space-y-4">
                <Image
                    src="/images/art/oil-paints-clear.png"
                    alt="oil paints"
                    width={550}
                    height={750}
                    className="object-contain"
                />
                <p className="text-lg leading-8 mt-40 pr-4">
                    please click on the sketchbook to look at my work catalog, 
                    composing of works from oil paintings to graphic and computer 
                    work
                </p>
            </div>

            <div className="flex justify-start">
                <section className="grid grid-rows-2 gap-2 items-center">
                    <div className="text-left">
                        <h1 className="text-title leading-none">
                            Art
                        </h1>
                    </div>
                    
                    <p className="text-lg italic leading-9 pr-8">
                        i’ve been actively involved in this subject since primary 
                        school (doodling) and started learning traditionally in 
                        high school (with oil paint). i will admit i still have a 
                        hard time understanding abstract and contemporary art. but 
                        i like to learn about them as they record history.
                    </p>

                    <div className="flex justify-center mt-20">
                        <Image
                            src="/images/art/sketchbook.jpg"
                            alt="sketchbook"
                            width={600}
                            height={700}
                            className="object-contain"
                        />
                    </div>
                </section>
            </div>
            
        </section>
        
      </div>
    )
}