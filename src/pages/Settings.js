import { useParams } from "react-router-dom";
import { useDrywall } from "../contexts/AppContext";
import useTranslation from "../hooks/useTranslations";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

const Settings = () => {
  const { settings, setSettings, calc_dw_materials } = useDrywall();
  const { system } = useParams();
  const [__t] = useTranslation();

  const handleClick = () => {
    /*
    setSettings((prevSettings) => {
      return { ...prevSettings, pUD: 10 };
    });
    */
    localStorage.clear();
  };
  const handleOnCange = (e) => {};

  return (
    <>
      <Container className="mt-2">
        <h3>Settings</h3>
      </Container>
      <Container className="mt-2 mb-2">
        <Button variant="primary" onClick={handleClick}>
          Clear local storage
        </Button>
      </Container>
      <Container className="d-flex justify-content-center bg-primary text-white mb-2">
        <Form.Group as={Row} className="mt-2 mb-2">
          <Form.Label
            column
            xs="8"
            sm="6"
            className="d-flex justify-content-end"
          >
            <h5>{__t("Процент преразход")}</h5>
          </Form.Label>
          <Col xs="4" sm="6">
            <Form.Control
              type="text"
              step={0.01}
              value={settings.percent}
              onChange={handleOnCange}
            />
          </Col>
        </Form.Group>
      </Container>
    </>
  );
};

export default Settings;
