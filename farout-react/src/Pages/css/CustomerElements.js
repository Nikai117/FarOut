import styled from "styled-components";

export const CustomerProfile = styled.div`
    background: #AB9EF5;
    align-items: center;
    justify-content: center;
    padding: 0 20px 20px 20px;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
`

export const ProfilePicture = styled.image`
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
     border-radius: 20px;
`

export const UserName = styled.div`
    position: relative;
    text-align: center;
    margin-top: 0;
`

export const UserInfo = styled.div`
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
     border-radius: 20px;
     background: whitesmoke;
     width: 75vh;
     align-items: center;
     justify-content: center;

`

export const ReservationInfo = styled.div`
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
     border-radius: 20px;
     background: whitesmoke;
     width: 75vh;
     align-items: center;
     justify-content: center;
     transition: all 0.2s ease-in-out;
     &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

`
