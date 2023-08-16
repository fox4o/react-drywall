import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { useDrywall } from "../contexts/AppContext";
import * as dw from "../contexts/DrywallContext";

import useTranslation from "../hooks/useTranslations";
import { Col, Container, Row, Image, Form } from "react-bootstrap";

const Calc = () => {
  const { calc_dw_materials } = useDrywall();
  const [result, setResult] = useState([]);
  const [percent, setPercent] = useState(10);
  const [resultPercent, setResultPercent] = useState([]);
  const [mq, setMq] = useState(0);
  const { system } = useParams();
  const [__t] = useTranslation();

  // calc materials on change mq
  useEffect(() => {
    setResult(calc_dw_materials(mq, dw[system]));
  }, [mq]);

  // calc materials on change result
  useEffect(() => {
    let res=[];
    Object.keys(result).map((material) => {
        dw["number_materials"].includes(material)
        ? res[material]=(Math.round(
            Math.round(
              result[material] * (1 + percent / 100) * 100
            ) / 100
          ))
        : res[material]=(Math.round(
            result[material] * (1 + percent / 100) * 100
          ) / 100);
    });
    setResultPercent(res);
  }, [result, percent]);

  const handleOnCange = (e) => {
    isNaN(parseFloat(e.target.value)) // is empty string
      ? setMq("")
      : setMq(parseFloat(e.target.value));
  };

  return (
    <>
      <Container className="mt-2">
        <h3>{__t(system)}</h3>
      </Container>
      <Container className="d-flex justify-content-center bg-primary text-white mb-2">
        <Form.Group as={Row} className="mt-2 mb-2">
          <Form.Label
            column
            xs="8"
            sm="6"
            className="d-flex justify-content-end"
          >
            <h5>{__t("size")}</h5>
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
        <Row>
          <Col className="border col-6 bg-success text-white d-flex justify-content-center">
            {__t("material")}
          </Col>
          <Col className="border col-3 bg-success text-white d-flex justify-content-center">
            {__t("qty")}
          </Col>
          <Col className="border col-3 bg-success text-white d-flex justify-content-center">
            + <Form.Control
            className="w-75"
            size="sm"
              type="text"
              step={0.01}
              value={percent}
              onChange={e=>setPercent(e.target.value)}
            /> %
          </Col>
        </Row>
        {Object.keys(result).map((material) => {
          return (
            <Row key={material}>
              <Col className="border col-6 d-flex justify-content-begin">
                {__t(material)}
              </Col>
              <Col className="border col-3 bg-info text-bg-info d-flex justify-content-end">
                {result[material]} {__t(material + "_s")}
              </Col>
              <Col className="border col-3 bg-info text-bg-info d-flex justify-content-end">
              {resultPercent[material]} {__t(material + "_s")}
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default Calc;
