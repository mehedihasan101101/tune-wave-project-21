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
            <div className=' relative  '>

                <div className="overflow-hidden lg:w-full md:w-[93%] m-auto relative" ref={emblaRef}>
                    <div className="flex ">
                        {children}
                    </div>
                </div>
                {/* arrows to control slides */}
                <button onClick={scrollPrev} class="absolute top-1/2 lg:-left-9 left-0 -translate-y-1/2 text-3xl hover:text-primaryText transition duration-300"><MdKeyboardArrowLeft></MdKeyboardArrowLeft></button>
                <button onClick={scrollNext} class="absolute lg:-right-9 right-0 top-1/2 -translate-y-1/2  text-3xl hover:text-primaryText transition duration-300"><MdKeyboardArrowRight></MdKeyboardArrowRight></button>
            </div>

        </>



    )
}
