import React from "react";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MystiqueCard = (props) => {
    const {href, srcImage, alt, name, iconObject} = props;
  return (
    <Button className="card-image-grad" href={href}>
      <div>
        <div className="content-description">
            {iconObject}
            <span>{name}</span>
        </div>
      </div>
        <LazyLoadImage
          src={srcImage}
          className="size-img"
          alt={!alt ? name: alt}
        />
    </Button>
  );
};

export default MystiqueCard;
