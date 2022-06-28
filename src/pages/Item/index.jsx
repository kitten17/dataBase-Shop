import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import docs from '../../server/firebase'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import module from './style.module.scss'

function Item() {
    const [items, setItems] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [itemImages, setitemImages] = useState([])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { idParam } = useParams()

    const breakpoints = {
        630: {
            slidesPerView: 4,
        },
    }

    useEffect(() => {
        docs.then(response => {
            response.docs.forEach(i => {
                if (i.id === idParam) {
                    setItems(p => [
                        ...p,
                        i.data()
                    ])

                    setitemImages(p => [
                        ...p,
                        i.data().images2
                    ])

                    setLoaded(true)
                }
            })
        })

        // eslint-disable-next-line
    }, [])

    const images = itemImages[0]

    return (
        <>
            {loaded && (
                <div className={module.item}>
                    <div className={module.item__column}>
                        <Link to="/" className={module["home-button"]} onClick = {()=>window.scrollTo(0, 0)}>
                            <div></div>
                            Вернуться
                        </Link>

                        <Swiper
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={module["swiper-slider_screen"]}
                        >
                            {images && images.map((i) => (
                                <SwiperSlide className={module.swiper__slide} key={i}>
                                    <img src={i} alt={i} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            breakpoints={breakpoints}
                            slidesPerView={2}
                            freeMode={true}
                            watchSlidesProgress={true}
                            navigation={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={module["swiper-slider_variants"]}
                            style={{ color: "red" }}
                        >
                            {images && images.map((i) => (
                                <SwiperSlide className={module.swiper__slide} key={i}>
                                    <img src={i} alt={i} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className={module.item__column}>
                        <div className={module["item-header"]}>
                            <div className={module["item-art"]}>
                                <p>Артикул {items[0].art}</p>

                                <h1>
                                    {items[0].title}
                                </h1>
                            </div>

                            <div className={module["item-options"]}>
                                <div className={module["item__option"]}>
                                    <h3>Возможные размеры</h3>
                                    <input readOnly type="text" value={items[0].size} />
                                </div>

                                <div className={module["item__option"]}>
                                    <h3>Узор</h3>
                                    <input readOnly type="text" value={items[0].pattern} />
                                </div>

                                <div className={module["item__option"]}>
                                    <h3>Цвет</h3>
                                    <input readOnly type="text" value={items[0].color} />
                                </div>
                            </div>
                        </div>

                        <div className={module["item-footer"]}>
                            {items[0].previousPrice && (
                                <h3 className={module["item-price_previous"]}>
                                    {items[0].previousPrice}₽/шт
                                </h3>
                            )}

                            <h1 className={module["item-price"]}>
                                {items[0].price}₽/шт
                            </h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Item;