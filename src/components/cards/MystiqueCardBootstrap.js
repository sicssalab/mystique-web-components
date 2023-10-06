import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const MystiqueCardBootstrap = (props) => {
  const { href, srcImage, name, sendPriceText, description, variant, tag } =
    props;
  return (
    <Card className="card-d-boots" style={{ width: "18rem" }} href={href}>
      <Card.Img variant="top" src={srcImage} />
      <Card.Body>
      <div>
      {tag && (<small>{tag}</small>)}
      </div>
      <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant={variant} className={`w-100 ${variant.search("outline") >= 0 ? "": "text-white"}`}>{sendPriceText}</Button>
      </Card.Body>
    </Card>
  );
};
MystiqueCardBootstrap.propTypes = {
  // disabled: PropTypes.bool,
  // label: PropTypes.string,
  // onClick: PropTypes.func
  variant: PropTypes.oneOf(["primary", "outline-primary"])
};
MystiqueCardBootstrap.defaultProps = {
  disabled: false,
  variant: "primary"
};
export default MystiqueCardBootstrap;
