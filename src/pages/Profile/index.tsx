import React, { useEffect, useState } from 'react';

import ProfileData from '../../components/ProfileData';

import { APIUser } from '../../@types';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Introdution,
  Card,
  Tab,
} from './styles';

import Introduction from './Introduction';
import Job from './Job';
import AcademicEducation from './AcademicEducation';
import Studies from './Studies';
import Skills from './Skills';
import Progress from './Progress';
import Highlights from './Highlights';

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
  const TabContent = () => (
    <div className="content">
      <span className="label">Introdution</span>
    </div>
  );
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
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <span className="line" />
          </Tab>
          <Introdution>
            <Tab>
              <TabContent />
            </Tab>
            <Card>
              <h1>Hello, how are you?</h1>
              <p>Few things about me, my name is Flávio Yoshizo Miyaji, I have bachelor degree in Information systems by the University UNIARA. I'm recently working from home for the company SHX Informatica LTDA as a software engineer and currently living in Brazil.</p>
              <h1>I’m currently working on Venda Assistida</h1>
              <p>I've been working on this project for about two years, as a Full-stack developer where we use a Java REST API with Spring-boot for backend, PostgresSQL for database, and ReactNative for front-end mobile.</p>
              <h1>I’m currently learning NodeJS, ReactJS, ReactNative and UI/UX Design</h1>
              <p>I've been studying this stack since November 2019, since then, I created some projects, most of them it's public here in those repositories and a couple of them it's private for commercial purposes.</p>
            </Card>
          </Introdution>
          
          <Introduction />
          <Job />
          <AcademicEducation />
          <Studies />
          <Skills />
          <Progress />
          <Highlights />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
