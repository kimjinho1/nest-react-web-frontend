import styled from "styled-components";

const SignUpDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SignUp = ({ loginState }) => {
    return (
        <SignUpDiv>
            <h1>Sign Up</h1>
        </SignUpDiv>
    );
}

export default SignUp;