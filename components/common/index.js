import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: url("/bg.png") no-repeat center,
    linear-gradient(
      180deg,
      rgba(73, 228, 84, 0) 0%,
      rgba(73, 228, 84, 0.05) 100%
    ),
    linear-gradient(0deg, rgba(84, 169, 67, 0.05), rgba(84, 169, 67, 0.05)),
    #021415;
  background-size: cover;
  overflow: hidden;
  @media (max-width: 451px) {
    height: auto;
  }
`;
