import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const StyledImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

const StyledName = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const User = (props) => {
  const { user, avatar } = props;
  return (
    <StyledContainer>
      <StyledImage src={avatar} />
      <StyledName>{user}</StyledName>
    </StyledContainer>
  );
};

export default User;