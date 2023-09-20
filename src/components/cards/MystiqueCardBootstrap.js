import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "react-bootstrap/Card";

const MystiqueCardBootstrap = (props) => {
  const { href, srcImage, name, sendPriceText, description } =
    props;
  return (
    <Card className="card-d-boots" style={{ width: "18rem" }} href={href}>
      <Card.Img variant="top" src={srcImage} />
      <Card.Body>
      <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" className="w-100 text-white">{sendPriceText}</Button>
      </Card.Body>
    </Card>
  );
};

export default MystiqueCardBootstrap;
