import React from "react";
import useTranslation from "../hooks/useTranslations";
import SystemCard from "../components/SystemCard";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const [__t] = useTranslation();
  return (
    <>
      <Container className="mt-2">
        <h3>{__t("systems")}</h3>
      </Container>
      <Container className="mt-2 mb-2">
        <Row xs={2} md={3} className="g-4 mb-1">
          <SystemCard system={"d112_gkb_av"} />
          <SystemCard system={"d112_gkb_do"} />
          <SystemCard system={"w111"} />
          <SystemCard system={"w112_2gkb"} />
          <SystemCard system={"w115_2gkb"} />
          <SystemCard system={"w115_2gkb_gkb"} />
          <SystemCard system={"w116_2gkb"} />
          <SystemCard system={"w116"} />
          <SystemCard system={"w623_gkb"} />
          <SystemCard system={"w623_2gkb"} />
          <SystemCard system={"w625_gkb"} />
          <SystemCard system={"w626_2gkb"} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
