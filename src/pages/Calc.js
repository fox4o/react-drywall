import { useParams } from "react-router-dom";
import { useDrywall } from "../contexts/AppContext";
import * as dw from "../contexts/DrywallContext";
import { useEffect, useRef, useState } from "react";
import useTranslation from "../hooks/useTranslations";
import { Col, Container, Row, Image, Form } from "react-bootstrap";

const Calc = () => {
  const { settings, setSettings, calc_dw_materials } = useDrywall();
  const [result, setResult] = useState({});
  const [mq, setMq] = useState(0);
  const { system } = useParams();
  const [__t] = useTranslation();

  useEffect(() => {
    setResult(calc_dw_materials(mq, dw[system]));
  }, [mq]);
  const handleOnCange = (e) => {
    isNaN(parseFloat(e.target.value)) // is empty string
      ? setMq("")
      : setMq(parseFloat(e.target.value));
  };

  return (
    <>
      <Container className="mt-2">
        <h2>{__t(system)}</h2>
      </Container>
      <Container className="mb-2">{__t(system + "_info")}</Container>
      <Container className="d-flex justify-content-center bg-primary text-white mb-2">
        <Form.Group as={Row} className="mt-2 mb-2">
          <Form.Label
            column
            xs="8"
            sm="6"
            className="d-flex justify-content-end"
          >
            {__t("size")}
          </Form.Label>
          <Col xs="4" sm="6">
            <Form.Control
              type="text"
              step={0.01}
              value={mq}
              onChange={handleOnCange}
            />
          </Col>
        </Form.Group>
      </Container>
      <Container className="justify-content-center">
        {Object.keys(result).map((material) => {
          return (
            <Row key={material}>
              <Col xs="8" sm="6" className="d-flex justify-content-end">
                {__t(material)} :
              </Col>
              <Col xs="4" sm="6" className="bg-info text-bg-info">
                {result[material]} {__t(material + "_s")}
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default Calc;
