import React, { useState } from "react";
import styled from "styled-components";

import Human from "../images/human.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TitleContainer = styled.div`
  height: 100%;
  width: 50%;
  background: white;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h3`
  margin: 40px 0 0 40px;
  font-family: Inter-Bold;
  color: black;
  font-size: 24px;
`;

const Header = styled.h1`
  width: 80%;
  font-family: Inter-Bold;
  font-size: 56px;
  color: black;
  margin: 100px auto 0 auto;
`;

const HumanImg = styled.img`
  width: 50%;
  margin: 70px auto 0 auto;
`;

const FormContainer = styled.div`
  height: 100%;
  width: 50%;
  background: #bb6bd9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormNav = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0 0 0;

  @media (max-height: 800px) {
    margin: 60px 0 0 0;
  }
`;

const FormNavHeading = styled.p`
  cursor: pointer;
  font-family: Inter-Bold;
  font-size: 18px;
  color: ${(props) => (props.mode === true ? "black" : "#772F92")};
  margin: 0;
`;

const SignupDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  margin: 50px 0 0 0;
`;

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  margin: 100px 0 0 0;
`;

const SignupTitle = styled.h5`
  font-family: Inter-SemiBold;
  color: black;
  font-size: 20px;
  margin: 0 0 30px 0;
`;

const SignupInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 25px 0;
`;

const SignupInputLabel = styled.label`
  font-family: Inter-Regular;
  color: black;
  font-size: 15px;
  margin: 0 0 10px 0;
`;

const SignupTextInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 100px;
  background: white;
  font-family: Inter-Regular;
  color: black;
  font-size: 14px;
  outline: none;
  border: none;
  padding: 0 20px 0 20px;
`;

const SubmitButton = styled.button`
  width: fit-content;
  padding: 15px 20px;
  font-family: Inter-SemiBold;
  color: White;
  font-size: 14px;
  background: #333333;
  border-radius: 100px;
  margin: 5px 0 0 0;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default function Home() {
  const [mode, setMode] = useState("signup");
  const [stepNo, setStepNo] = useState(1);

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [repassword, setRepass] = useState("");
  const [name, setName] = useState("");
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  const changeMode = (modeSet) => {
    setMode(modeSet);
  };

  const toStep2 = () => {
    if (repassword === password && email !== "") {
      setStepNo(2);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Logo>Helpathon</Logo>
        <Header>Let us help you organize your hackathon</Header>
        <HumanImg src={Human} />
      </TitleContainer>
      <FormContainer>
        <FormNav>
          <FormNavHeading
            onClick={() => {
              changeMode("signup");
            }}
            mode={mode === "signup" ? true : false}
          >
            Signup
          </FormNavHeading>
          <FormNavHeading
            onClick={() => {
              changeMode("login");
            }}
            mode={mode === "login" ? true : false}
          >
            Login
          </FormNavHeading>
        </FormNav>
        {mode === "signup" ? (
          <SignupDiv>
            {stepNo === 1 ? (
              <>
                <SignupTitle>Step 1: User Information</SignupTitle>
                <SignupInputWrapper>
                  <SignupInputLabel for="email">
                    Enter your email
                  </SignupInputLabel>
                  <SignupTextInput
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></SignupTextInput>
                </SignupInputWrapper>
                <SignupInputWrapper>
                  <SignupInputLabel for="password">
                    Enter a password
                  </SignupInputLabel>
                  <SignupTextInput
                    placeholder="password"
                    type="password"
                    id="password"
                    onChange={(e) => setPass(e.target.value)}
                  ></SignupTextInput>
                </SignupInputWrapper>
                <SignupInputWrapper>
                  <SignupInputLabel for="repassword">
                    Reenter your password
                  </SignupInputLabel>
                  <SignupTextInput
                    placeholder="password"
                    type="password"
                    id="repassword"
                    onChange={(e) => setRepass(e.target.value)}
                  ></SignupTextInput>
                </SignupInputWrapper>
                <SubmitButton onClick={toStep2}>Get Started</SubmitButton>
              </>
            ) : (
              <>
                <SignupTitle>Step 2: Hackathon Information</SignupTitle>
                <SignupInputWrapper>
                  <SignupInputLabel for="hackathonName">
                    Enter your hackathon's name
                  </SignupInputLabel>
                  <SignupTextInput
                    placeholder="RU Hacks"
                    type="text"
                    id="hackathonName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></SignupTextInput>
                </SignupInputWrapper>
                <SignupInputWrapper>
                  <SignupInputLabel for="startDate">
                    Enter your hackathon's start date
                  </SignupInputLabel>
                  <SignupTextInput
                    placeholder="May 17, 2020"
                    type="date"
                    id="startDate"
                    onChange={(e) => setStart(e.target.value)}
                  ></SignupTextInput>
                </SignupInputWrapper>
                <SignupInputWrapper>
                  <SignupInputLabel for="endDate">
                    Enter your hackathon's end date
                  </SignupInputLabel>
                  <SignupTextInput
                    placeholder="May 20, 2020"
                    type="date"
                    id="endDate"
                    onChange={(e) => setEnd(e.target.value)}
                  ></SignupTextInput>
                </SignupInputWrapper>
                <SignupInputWrapper>
                  <SignupInputLabel for="location">
                    Enter your hackathon's location
                  </SignupInputLabel>
                  <SignupTextInput
                    placeholder="Toronto"
                    type="text"
                    id="location"
                    onChange={(e) => setLocation(e.target.value)}
                  ></SignupTextInput>
                </SignupInputWrapper>
                <SignupInputWrapper>
                  <SignupInputLabel for="budget">
                    Enter your hackathon's budget
                  </SignupInputLabel>
                  <SignupTextInput
                    placeholder="1000"
                    type="text"
                    id="budget"
                    onChange={(e) => setBudget(e.target.value)}
                  ></SignupTextInput>
                </SignupInputWrapper>
                <SubmitButton>Start Organizing</SubmitButton>
              </>
            )}
          </SignupDiv>
        ) : (
          <LoginDiv>
            <SignupInputWrapper>
              <SignupInputLabel for="email">Enter your email</SignupInputLabel>
              <SignupTextInput
                placeholder="Email"
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              ></SignupTextInput>
            </SignupInputWrapper>
            <SignupInputWrapper>
              <SignupInputLabel for="password">
                Enter your password
              </SignupInputLabel>
              <SignupTextInput
                placeholder="password"
                type="password"
                id="password"
                onChange={(e) => setPass(e.target.value)}
              ></SignupTextInput>
            </SignupInputWrapper>
            <SubmitButton>Login</SubmitButton>
          </LoginDiv>
        )}
      </FormContainer>
    </Container>
  );
}
