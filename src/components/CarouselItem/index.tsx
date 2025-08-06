import styles from "./CarouselItem.module.css"
import { Props } from "./types"
  
  export default function CarouselItem({ imgUrl, imgTitle }: Props) {
    return (
      <div className={styles.carouselItem}>
        <img src={imgUrl} alt={imgTitle} loading="lazy" />
      </div>
    );
  }
  