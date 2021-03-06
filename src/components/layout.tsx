import "../styles/index.css";
import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import Icon from "./icon";
import SEO from "./seo";
import styledLog from "styled-logs";

const MainContainer = styled.main<{ maxWidth?: string }>`
  margin: 10px auto;
  max-width: ${props => props.maxWidth || "960px"};
  padding: 10px 20px;
`;

const Header = styled.header`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: inherit;
`;

const StyledLogo = styled(Link)`
  color: ${props => props.theme.pink};
  font-family: "Barriecito";
  margin: 0;
  margin-top: 20px;
  transform: rotate(-3deg);
  font-size: 35px;
  border: 3px solid transparent;
  transition: border 0.5s;
  &:focus {
    border: 3px solid yellow;
  }
  &:active {
    border: 3px solid transparent;
  }
  &:hover {
    color: ${props => props.theme.pink};
  }
  outline: none;

  span:first-child {
    color: ${props => props.theme.lightblue};
  }

  span:nth-child(2n) {
    color: orange;
  }
`;

const Logo = () => {
  return (
    <StyledLogo to="/">
      <span>FLUKY</span>
      <span css={``}>.</span>
      <span>DEV</span>

      <Icon />
    </StyledLogo>
  );
};

const Wrapper = styled.div<{ bg: string }>`
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: ${props => props.bg || "white"};
  padding-bottom: 100px;
`;

export const colors = {
  powderblue: "#f0f6ff",
  darkblue: "#16202b",
  blue: "#0066B8",
  bluegray: "#086CA2",
  lightblue: "#2193b0",
  lightestblue: "#80b5ff",
  green: "#53c41a",
  lightgreen: "#9ded72",
  gray1: "#f5f5f5",
  gray2: "#efefef",
  gray3: "#dadada",
  gray4: "#666",
  gray5: "#333",
  red: "#f5222d",
  orange: "#f08b32",
  pink: "#f857a6",
};

interface LayoutProps {
  bg?: string;
  maxWidth?: string;
  title: string;
  titleTemplate?: string;
  keywords?: string[];
  description: string;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  bg,
  maxWidth,
  title,
  keywords,
  description,
  titleTemplate,
}) => {
  useEffect(() => {
    const Log = styledLog.log`
      background: url('https://res.cloudinary.com/gojutin/image/upload/v1566927084/Fluky.dev/flukydev-icon-192.png')
      no-repeat center center;
      background-size: contain;
      padding: 10px;
      margin: 10px auto;
      text-align: center;
      font: 700 80px 'Barriecito';
    `;
    Log("Fluky.dev");
  }, []);
  return (
    <>
      <SEO
        title={title}
        keywords={keywords}
        description={description}
        titleTemplate={titleTemplate}
      />
      <ThemeProvider theme={colors}>
        <Wrapper bg={bg}>
          <Header>
            <Logo />
          </Header>
          <MainContainer maxWidth={maxWidth}>{children}</MainContainer>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
