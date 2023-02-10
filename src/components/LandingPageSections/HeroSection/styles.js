import styled from "styled-components";

export const MainHeading = styled.h1`
  font-size: 68px;
  font-weight: 700;
  text-align: center;
  max-width: 965px;

  @media screen and (max-width: 900px) {
    font-size: 48px;
  }
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

export const StyledDivider = styled.div`
  width: 200px;
  height: 10px;
  background: linear-gradient(90deg, #dc293f 1.88%, #5759d8 98.29%);
  border-radius: 30px;
`;

export const SubHeading = styled.h4`
  max-width: 544px;
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  color: #b7b4c7;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
