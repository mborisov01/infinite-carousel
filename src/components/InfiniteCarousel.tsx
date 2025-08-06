import { useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";
import "./carousel.css";

export type ImageItem = {
  id: string;
  author: string;
  download_url: string;
};

type Props = {
  images: ImageItem[];
  cloneCount?: number;
  itemWidth?: number;
  scrollSpeed?: number;
};

export default function InfiniteCarousel({
  images,
  cloneCount = 1,
  itemWidth = 300,
  scrollSpeed = 8,
}: Props) {
  const carousel = useRef<HTMLDivElement>(null);
  const itemWidthRef = useRef(itemWidth);

  //Cloning the first and the last element at the start and at the end of the list
  const extended = [
    ...images.slice(-cloneCount),
    ...images,
    ...images.slice(0, cloneCount),
  ];

  useEffect(() => {
    const el = carousel.current;
    if (!el || images.length === 0) return;

    //Define start position from where scrolling starts
    const firstReal = el.children[cloneCount] as HTMLElement;
    if (firstReal) {
      itemWidthRef.current = firstReal.offsetWidth || itemWidth;
      el.scrollLeft = itemWidthRef.current * cloneCount;
    }

    const handleWheel = (e: WheelEvent) => {
      if (!el) return;
      e.preventDefault();

      let delta = e.deltaY || e.deltaX; //Check if deltaX is triggered (for touchpads)
      
      //Increase delta sensitivity if touchpad is used
      if (Math.abs(delta) < 15) {
        delta *= 100 - Math.abs(delta) * 2;
      }

      const movement = delta * scrollSpeed;
      el.scrollLeft += movement;

      const total = images.length;
      const width = itemWidthRef.current;
      const scrollLeft = el.scrollLeft;

      const leftBoundary = width * (cloneCount - 0.5);
      const rightBoundary = width * (total + cloneCount - 0.5);

      const buffer = width * 0.8; // helps avoid visual jumps

      //Scrolling logic
      if (scrollLeft >= rightBoundary + buffer) {
        el.style.scrollBehavior = "auto";
        el.scrollLeft = width * cloneCount;
        requestAnimationFrame(() => {
          el.style.scrollBehavior = "smooth";
        });
      } else if (scrollLeft <= leftBoundary - buffer) {
        el.style.scrollBehavior = "auto";
        el.scrollLeft = width * (total + cloneCount - 1);
        requestAnimationFrame(() => {
          el.style.scrollBehavior = "smooth";
        });
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [images, cloneCount, scrollSpeed]);

  return (
    <div className="carousel-wrapper" ref={carousel}>
      {extended.map((img, i) => (
        <CarouselItem key={img.id} imgUrl={img.download_url} imgTitle={img.author} imageWidth={itemWidth}/>
      ))}
    </div>
  );
}