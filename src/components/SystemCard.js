import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import useTranslation from "../hooks/useTranslations";
import { Link } from "react-router-dom";

const SystemCard = ({ system }) => {
  const [__t] = useTranslation();

  return (
    <Col key={system}>
      <Link to={`calc/${system}`}>
        <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL +`/img/${system}.jpg`} />
          <Card.Body>
            <Card.Text>{__t(system)}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default SystemCard;
