import styled from "styled-components";

export const SectionTitle = styled.h3`
  font-weight: 700;
  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const HeadingRight = styled.h3`
  font-weight: 600;
  font-size: 28px;
  color: #fff;
  text-align: right;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const HeadingLeft = styled.h3`
  font-weight: 600;
  font-size: 28px;
  color: #fff;
  text-align: left;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const SubHeadingRight = styled.h4`
  max-width: 400px;
  font-weight: 400;
  font-size: 18px;
  color: #b7b4c7;
  text-align: right;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const SubHeadingLeft = styled.h4`
  max-width: 400px;
  font-weight: 400;
  font-size: 18px;
  color: #b7b4c7;
  text-align: left;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ItemImage = styled.img`
  width: 350px;
  @media screen and (max-width: 900px) {
    width: 250px;
  }
  @media screen and (max-width: 600px) {
    width: 150px;
  }
`;
