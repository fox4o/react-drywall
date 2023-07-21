import React from "react";
import useTranslation from "../hooks/useTranslations";
import SystemCard from "../components/SystemCard";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const [__t] = useTranslation();
  return (
    <>
      <Container className="mt-2">
        <h2>{__t("systems")}</h2>
      </Container>
      <Container className="mt-2">
        <Row xs={2} md={3} className="g-4 mb-1">
          <SystemCard system={"d112_gkb_av"} />
          <SystemCard system={"d112_gkb_do"} />
          <SystemCard system={"w111"} />
          <SystemCard system={"w112_2gkb"} />
          <SystemCard system={"w115_2gkb"} />
          <SystemCard system={"w115_2gkb_gkb"} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
