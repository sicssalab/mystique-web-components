import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WrapperHeaderBasic = (props) => {
  const { srcImage, alt, title } = props;

  return (
    <div
      className="position-relative"
      style={styles.content}>
      <LazyLoadImage
        src={srcImage}
        className="img-fluid"
        alt={!alt ? title : alt}
      />
      <Container className="d-flex position-absolute align-items-center justify-content-center h-100">
        <h1>{title}</h1>
      </Container>
    </div>
  );
};
const styles = {
    content: {
        background: "#c4c4c4",
        minHeight: 350,
        display: "flex",
        justifyContent: "center",
    }
}
export default WrapperHeaderBasic;
