import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>{t("Contact Us")}</Title>
              <Para>{t("Get in touch with the Embassy.")}</Para>
              <a href="mailto:consulado_honduras@yahoo.com">
                <Chat>{t("Send an Email")}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              {/* This column can be repurposed or left empty for spacing, or removed and spans adjusted */}
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* Intentionally left empty or can be used for other content */}
            </Col>
          </Row>
          <Row justify="space-between" style={{ marginTop: "2rem" }}>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>{t("Our Address")}</Title>
              <Para>Aharon Kron St 3</Para>
              <Para>Rishon LeZion</Para>
              <Para>Israel</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              {/* This column can be repurposed or left empty for spacing, or removed and spans adjusted */}
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="English"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="Español"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="250px"
                  height="32px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <Para>© {new Date().getFullYear()} Embassy of Honduras in Israel. All Rights Reserved.</Para>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
