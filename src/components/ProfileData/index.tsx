import React from 'react';

import {
  Container,
  Flex,
  Avatar,
} from './styles';

interface IProps {
  username: string;
  name: string;
  avatarUrl?: string;
  job: string;
}

function ProfileData(props: IProps) {
  const {
    username,
    name,
    avatarUrl,
    job,
  } = props;
  let src = 'https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png';
  if (avatarUrl) {
    src = avatarUrl;
  }
  return (
    <Container>
      <Flex>
        <Avatar
          src={src}
          alt={username}
        />
        <div>
          <h1>{name}</h1>
          <h2>{job}</h2>
        </div>
      </Flex>
    </Container>
  );
}

export default ProfileData;
