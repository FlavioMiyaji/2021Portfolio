import React from 'react';

import {
  Container,
  Flex,
  Avatar,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
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

function ProfileData(props: IProps) {
  const {
    username,
    name,
    avatarUrl,
    company,
    location,
    email,
    blog,
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
        </div>
      </Flex>
      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
}

export default ProfileData;
