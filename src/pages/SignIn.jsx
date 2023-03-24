import styled from "styled-components";

const SignInDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SignUp = ({ loginState }) => {
    return (
        <SignInDiv>
            <h1>Sign In</h1>
        </SignInDiv>
    );
}

export default SignUp;