import React from 'react';

import {
  Container,
  Avatar,
} from './styles';

interface IProps {
  username: string;
  name: string;
  avatarUrl?: string;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

function SmallProfile(props: IProps) {
  const {
    username,
    name,
    avatarUrl,
  } = props;
  let src = 'https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png';
  if (avatarUrl) {
    src = avatarUrl;
  }
  return (
    <Container>
      <Avatar
        src={src}
        alt={username}
      />
      <div>
        <h1>{name}</h1>
      </div>
    </Container>
  );
}

export default SmallProfile;
