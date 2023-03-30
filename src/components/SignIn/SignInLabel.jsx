import styled from "styled-components";

const LabelDiv = styled.div`
  padding: 6px 0px;
`;

const SignInLabel = ({ text }) => {
  return (
    <LabelDiv>
      <strong>{text}</strong>
    </LabelDiv>
  );
};

export default SignInLabel;
