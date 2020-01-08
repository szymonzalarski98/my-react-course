import React from 'react';
import styled from 'styled-components';
import User from './User';
import Likes from './Likes';

const StyledContainer = styled.div`
  background: #ededed;
  padding: 10px;
  margin: 10px 0px;
`;

const Post = (props) => {
  const { title, post, user, avatar, likes } = props.data;
  return (
    <StyledContainer>
      <User avatar={avatar} user={user} />
      <h2>{title}</h2>
      <p>{post}</p>
      <Likes likes={likes} />
    </StyledContainer>
  );
};

export default Post;