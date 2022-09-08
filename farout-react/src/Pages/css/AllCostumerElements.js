import styled from "styled-components"


export const CustomerCard = styled.div`
  background: #fff;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TitleCard = styled.div`
    background-color: #7F8AEA;
    color: whitesmoke;
    border-radius: 50px;
    align-items: center;
`