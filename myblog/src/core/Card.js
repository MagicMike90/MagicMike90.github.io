import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;

  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover {
    transform: translateY(-4px);
    box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
  @media (min-width: 700px) {
    margin-right: 20px;
    margin-bottom: 20px;

    :nth-child(even) {
      margin-right: 0;
    }
  }
  @media (min-width: 980px) {
    :nth-child(even) {
      margin-right: 20px;
    }
    :nth-child(3n) {
      margin-right: 0;
    }
  }
`;
const CardHeader = styled.div`
  font-size: 24px;
`;

const Card = ({ title, children }) => (
  <StyledCard>
    <CardHeader>{title}</CardHeader>
    {children}
  </StyledCard>
);

export default Card;
