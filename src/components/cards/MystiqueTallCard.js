import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MystiqueTallCard = (props) => {
  const { href, srcImage, alt, name, iconObject } = props;
  return (
    <div className="card-image-tall-grad">
      <Button className="card-image-grad" href={href}>
        <LazyLoadImage
          src={srcImage}
          className="size-img"
          alt={!alt ? name : alt}
        />
      </Button>
      <Button className="content-text" href={href}>
        {iconObject}
        <span>{name}</span>
      </Button>
    </div>
  );
};

export default MystiqueTallCard;
