import React from 'react';
import styled from 'styled-components';
import { FiHeart } from "react-icons/fi";

const StyledContainer = styled.div`
  flex-direction: row;
  align-items: center;
`;

const Likes = ({ likes }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  return (
    <StyledContainer onClick={() => setIsLiked(!isLiked)}>
      <FiHeart color={isLiked ? 'red' : 'grey' } size="20" />
      <p>{likes}</p>
    </StyledContainer>
  );
};

export default Likes;