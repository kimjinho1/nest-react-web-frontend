import styled from "styled-components";

const MusicDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MusicDisplay = () => {
  return (
    <MusicDiv>
      <h1>Music Display</h1>
    </MusicDiv>
  );
};

export default MusicDisplay;
