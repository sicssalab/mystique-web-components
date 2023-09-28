import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
//import PropTypes from "prop-types";
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
// MystiqueCardBootstrap.propTypes = {
//   disabled: PropTypes.bool,
//   label: PropTypes.string,
//   onClick: PropTypes.func
// };
// MystiqueCardBootstrap.defaultProps = {
//   disabled: false
// };
export default MystiqueCardBootstrap;
