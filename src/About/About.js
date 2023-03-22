import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const About = () => {
  return (
    <AboutDiv>
      <h1>About</h1>
    </AboutDiv>
  );
};

export default About;
