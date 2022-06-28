import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import module from './style.module.scss'

function Slider() {
    const [popupData, setPopupData] = useState([])
    const sliderPopupRef = useRef("")
    const sliderOverlayRef = useRef("")

    const popupOpen = (title) => {
        setPopupData(title)
        sliderPopupRef.current.classList.add(module["slider-popup_active"])
        sliderOverlayRef.current.classList.add(module["slider-overlay_active"])

        document.body.style.overflow = "hidden"
    }

    const popupClose = () => {
        sliderPopupRef.current.classList.remove(module["slider-popup_active"])
        sliderOverlayRef.current.classList.remove(module["slider-overlay_active"])

        document.body.style.overflow = "visible"
    }

    const slides = [
        {
            id: 1,
            img: "https://grilles.ru/storage/sections/23/640x480/1708239652.jpg",
            title: "Монтаж щелевых решёток скрытого монтажа",
            pretitle: "Airslot / G-Line / Airline-L / Airline-LS / Airline-T / G-Look / PV / IV-S",
        },
        {
            id: 2,
            img: "https://grilles.ru/storage/sections/23/640x480/1708239652.jpg",
            title: "Монтаж щелевых решёток скрытого монтажа",
            pretitle: "Airslot / G-Line / Airline-L / Airline-LS / Airline-T / G-Look / PV / IV-S",
        },
        {
            id: 3,
            img: "https://grilles.ru/storage/sections/23/640x480/1708239652.jpg",
            title: "Монтаж щелевых решёток скрытого монтажа",
            pretitle: "Airslot / G-Line / Airline-L / Airline-LS / Airline-T / G-Look / PV / IV-S",
        },
        {
            id: 4,
            img: "https://grilles.ru/storage/sections/23/640x480/1708239652.jpg",
            title: "Монтаж щелевых решёток скрытого монтажа",
            pretitle: "Airslot / G-Line / Airline-L / Airline-LS / Airline-T / G-Look / PV / IV-S",
        },
        {
            id: 5,
            img: "https://grilles.ru/storage/sections/23/640x480/1708239652.jpg",
            title: "Монтаж щелевых решёток скрытого монтажа",
            pretitle: "Airslot / G-Line / Airline-L / Airline-LS / Airline-T / G-Look / PV / IV-S",
        },
        {
            id: 6,
            img: "https://grilles.ru/storage/sections/23/640x480/1708239652.jpg",
            title: "Монтаж щелевых решёток скрытого монтажа",
            pretitle: "Airslot / G-Line / Airline-L / Airline-LS / Airline-T / G-Look / PV / IV-S",
        },

    ]

    const breakpoints = {
        1200: {
            slidesPerView: 4,
        },

        768: {
            slidesPerView: 2,
        },

        300: {
            slidesPerView: 1,
        },
    }

    return (
        <>
            <div className={module["slider-overlay"]} ref={sliderOverlayRef}>

            </div>

            <div className={module["slider-popup"]} ref={sliderPopupRef}>
                <div className={module["popup-header"]}>
                    <h1>
                        Монтаж наружных решеток накладного типа
                    </h1>

                    <button onClick={popupClose} />
                </div>

                <div className={module["popup-content"]}>

                </div>
            </div>

            <div className={module.slider}>
                <div className={module["slider-header"]}>
                    <h1>Способы монтажа</h1>
                    <h3>Мы располагаем огромными возможностями и выбором</h3>
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    className={module['slider-swiper']}
                    breakpoints={breakpoints}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {slides.map(i => (
                        <SwiperSlide onClick={() => popupOpen(i.title)} key={i.id}>
                            <div className={module.slider__slide}>
                                <img src={i.img} alt="" />
                                <h1>{i.title}</h1>
                                <h3>{i.pretitle}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Slider;