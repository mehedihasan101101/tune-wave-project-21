import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export function EmblaCarousel({ children }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        //embla api to control the carousel
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps',

    })
    // sliding arrow
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])



    return (
        <>
            <div className=' relative md:mt-0 mt-2 '>

                <div className="overflow-hidden lg:w-full z-10 w-[93%] m-auto relative " ref={emblaRef}>
                    <div className="flex ">
                        {children}
                    </div>
                </div>
                {/* arrows to control slides */}
                <button onClick={scrollPrev} class="absolute md:top-1/2 -top-9 right-5 lg:-left-9 md:left-0 md:-translate-y-1/2 text-2xl md:text-3xl hover:text-primaryText transition duration-300"><MdKeyboardArrowLeft></MdKeyboardArrowLeft></button>

                <button onClick={scrollNext} class="absolute lg:-right-9 -top-9 right-0 md:right-0 md:top-1/2 md:-translate-y-1/2  text-2xl md:text-3xl hover:text-primaryText transition duration-300"><MdKeyboardArrowRight className=''></MdKeyboardArrowRight></button>
            </div>

        </>



    )
}
