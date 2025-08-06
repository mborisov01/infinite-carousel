type Props = {
  imgUrl: string;
  imgTitle: string;
  imageWidth?: number;
};

export default function CarouselItem({ imgUrl, imgTitle, imageWidth = 300 }: Props) {
  return (
    <div className="carousel-item" style={{ width: imageWidth }}>
      <img src={imgUrl} alt={imgTitle} loading="lazy" width={imageWidth} />
    </div>
  );
}
