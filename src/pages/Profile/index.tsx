import React, { useEffect, useState } from 'react';

import ProfileData from '../../components/ProfileData';

import { APIUser } from '../../@types';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Tab,
} from './styles';

import Introduction from './Introduction';
import Job from './Job';
import AcademicEducation from './AcademicEducation';
import Studies from './Studies';
import Skills from './Skills';
import Progress from './Progress';
import Highlights from './Highlights';
import Contacts from './Contacts';

interface IProfileData {
  user?: APIUser;
  error?: string;
}

const Profile: React.FC = () => {
  const [data, setData] = useState<IProfileData>({} as IProfileData);
  useEffect(() => {
    const loadProfile = async () => {
      const loadData = async () => {
        //   try {
        //     const userResponse = await fetch(`http://api.github.com/users/FlavioMiyaji`);
        //     if (userResponse.status === 404) {
        //       setData({ error: 'User not found!' });
        //       return;
        //     }
        //     const user: APIUser = await userResponse.json();
        //     setData({ user });
        //   } catch ({ message }) {
        //     setData({ error: message });
        //   }
        setData({
          user: {
            avatar_url: 'https://avatars1.githubusercontent.com/u/22628185?s=460&u=8fd4b52e5d6b7d5880f34daac033ec67048e8d73&v=4',
            login: 'FlavioMiyaji',
            name: 'Flavio Yoshizo Miyaji',
          }
        });
      };
      loadData();
    }
    loadProfile();
  }, []);
  const { user, error } = data;
  if (error) {
    return <h3>{error}</h3>;
  }
  if (!user) {
    return <h1>Carregando...</h1>;
  }
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
        </div>
        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username="FlavioMiyaji"
            name="Flavio Yoshizo Miyaji"
            avatarUrl="https://avatars1.githubusercontent.com/u/22628185?s=460&u=8fd4b52e5d6b7d5880f34daac033ec67048e8d73&v=4"
            job="Software Engineer"
            location="Matão, São Paulo - Brazil"
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <span className="line" />
          </Tab>
          <Introduction />
          <Studies />
          <Job />
          <AcademicEducation />
          <Skills />
          <Progress />
          <Highlights />
          <Contacts />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
