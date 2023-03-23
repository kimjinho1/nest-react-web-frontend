import styled from "styled-components";

const FooterP = styled.p`
  position: absolute;
  color: white;
  font-size: 20px;
  bottom: 1px;
  text-align: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterP>Create by Jinho Kim © 2023</FooterP>
  )
}

export default Footer;