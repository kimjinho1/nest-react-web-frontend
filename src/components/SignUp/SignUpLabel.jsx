import styled from "styled-components";

const LabelDiv = styled.div`
  padding: 4px 0px;
`;

const SignUpLabel = ({ text }) => {
  return (
    <LabelDiv>
      <strong>{text}</strong>
    </LabelDiv>
  );
};

export default SignUpLabel;
