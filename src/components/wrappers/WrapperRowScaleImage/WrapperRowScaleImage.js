import { Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";

const WrapperRowScaleImage = (props) => {
  const { imageOrder, descriptionOrder, srcImage, alt, title, description } =
    props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  return (
    <Row>
      <Col xs={12} md={6} style={{ order: isMobile ? 1 : imageOrder }}>
        {srcImage && (
          <LazyLoadImage
            src={srcImage}
            className="img-fluid"
            alt={!alt ? title : alt}
          />
        )}
      </Col>
      <Col
        xs={12}
        md={6}
        style={{ order: isMobile ? 2 : descriptionOrder }}
        className={`d-flex flex-column justify-content-center ${
          isMobile ? "pt-3" : ""
        }`}
      >
        <h2 className={`${isMobile? "text-center":""}`}>{title}</h2>
        <p className={`mb-4 ${isMobile? "text-center":""}`}>{description}</p>
      </Col>
    </Row>
  );
};
WrapperRowScaleImage.defaultProps = {
  imageOrder: 1,
  descriptionOrder: 2,
};

export default WrapperRowScaleImage;
