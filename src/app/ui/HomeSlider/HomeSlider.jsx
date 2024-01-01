import { register } from "swiper/element/bundle";
import styles from "./HomeSlider.module.scss";
register();

export default function HomeSlider() {
    const sliderImgs = [
        "/imgs/slider-1.png",
        "/imgs/slider-2.jpg",
        "/imgs/slider-3.jpg",
    ];
    return (
        <div className='container'>
            <swiper-container
                slides-per-view='1'
                speed='500'
                autoplay='true'
                loop='true'
                css-mode='true'
            >
                {sliderImgs?.map((img) => (
                    <swiper-slide key={img}>
                        <picture>
                            <source
                                media='(min-width:650px)'
                                srcSet={img}
                                width='100%'
                                height='560px'
                            />
                            <source
                                media='(min-width:465px)'
                                srcSet={img}
                                width='100%'
                                height='200px'
                            />
                            <img
                                src={img}
                                alt='Flowers'
                                width='100%'
                                height='200px'
                            />
                        </picture>
                    </swiper-slide>
                ))}
                ...
            </swiper-container>
            <div className={styles.homeSlider}>
                <h1 className={styles.hero}>
                    Simply Unique <span className={styles.span}>/</span> Simply
                    Better
                    <span className={styles.span}>.</span>
                </h1>
                <p className={styles.p}>
                    <span className={styles.spanE}>3legant</span> is a gift &
                    decorations store based in HCMC, Vietnam. Est since 2019.
                </p>
            </div>
        </div>
    );
}
