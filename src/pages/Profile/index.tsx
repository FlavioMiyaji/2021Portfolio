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
  RepoIcon,
} from './styles';

interface IProfileData {
  user?: APIUser;
  error?: string;
}

const Profile: React.FC = () => {
  const [data, setData] = useState<IProfileData>({} as IProfileData);
  useEffect(() => {
    const loadProfile = async () => {
      const loadData = async () => {
        try {
          const userResponse = await fetch(`http://api.github.com/users/FlavioMiyaji`);
          if (userResponse.status === 404) {
            setData({ error: 'User not found!' });
            return;
          }
          const user: APIUser = await userResponse.json();
          setData({ user });
        } catch ({ message }) {
          setData({ error: message });
        }
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
      <RepoIcon />
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
            username={user.login}
            name={user.name}
            avatarUrl={user.avatar_url}
            company={user.company}
            location={user.location}
            email={user.email}
            blog={user.blog}
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
              <strong>Hello, how are you?</strong>
              <p>Few things about me, my name is Flávio Yoshizo Miyaji, I have bachelor degree in Information systems by the University UNIARA. I'm recently working from home for the company SHX Informatica LTDA as a software engineer and currently living in Brazil.</p>
            </Card>
            <Card>
              <strong>I’m currently working on Venda Assistida</strong>
              <p>I've been working on this project for about two years, as a Full-stack developer where we use a Java REST API with Spring-boot for backend, PostgresSQL for database, and ReactNative for front-end mobile.</p>
            </Card>
            <Card>
              <strong>I’m currently learning NodeJS, ReactJS, ReactNative and UI/UX Design</strong>
              <p>I've been studying this stack since November 2019, since then, I created some projects, most of them it's public here in those repositories and a couple of them it's private for commercial purposes.</p>
            </Card>
          </Introdution>

          <Introdution>
            <Tab>
              <TabContent />
            </Tab>
            <Card>
              <strong>Hello, how are you?</strong>
              <p>Few things about me, my name is Flávio Yoshizo Miyaji, I have bachelor degree in Information systems by the University UNIARA. I'm recently working from home for the company SHX Informatica LTDA as a software engineer and currently living in Brazil.</p>
            </Card>
            <Card>
              <strong>I’m currently working on Venda Assistida</strong>
              <p>I've been working on this project for about two years, as a Full-stack developer where we use a Java REST API with Spring-boot for backend, PostgresSQL for database, and ReactNative for front-end mobile.</p>
            </Card>
            <Card>
              <strong>I’m currently learning NodeJS, ReactJS, ReactNative and UI/UX Design</strong>
              <p>I've been studying this stack since November 2019, since then, I created some projects, most of them it's public here in those repositories and a couple of them it's private for commercial purposes.</p>
            </Card>
          </Introdution>

          <Introdution>
            <Tab>
              <TabContent />
            </Tab>
            <Card>
              <strong>Hello, how are you?</strong>
              <p>Few things about me, my name is Flávio Yoshizo Miyaji, I have bachelor degree in Information systems by the University UNIARA. I'm recently working from home for the company SHX Informatica LTDA as a software engineer and currently living in Brazil.</p>
            </Card>
            <Card>
              <strong>I’m currently working on Venda Assistida</strong>
              <p>I've been working on this project for about two years, as a Full-stack developer where we use a Java REST API with Spring-boot for backend, PostgresSQL for database, and ReactNative for front-end mobile.</p>
            </Card>
            <Card>
              <strong>I’m currently learning NodeJS, ReactJS, ReactNative and UI/UX Design</strong>
              <p>I've been studying this stack since November 2019, since then, I created some projects, most of them it's public here in those repositories and a couple of them it's private for commercial purposes.</p>
            </Card>
          </Introdution>

          <Introdution>
            <Tab>
              <TabContent />
            </Tab>
            <Card>
              <strong>Hello, how are you?</strong>
              <p>Few things about me, my name is Flávio Yoshizo Miyaji, I have bachelor degree in Information systems by the University UNIARA. I'm recently working from home for the company SHX Informatica LTDA as a software engineer and currently living in Brazil.</p>
            </Card>
            <Card>
              <strong>I’m currently working on Venda Assistida</strong>
              <p>I've been working on this project for about two years, as a Full-stack developer where we use a Java REST API with Spring-boot for backend, PostgresSQL for database, and ReactNative for front-end mobile.</p>
            </Card>
            <Card>
              <strong>I’m currently learning NodeJS, ReactJS, ReactNative and UI/UX Design</strong>
              <p>I've been studying this stack since November 2019, since then, I created some projects, most of them it's public here in those repositories and a couple of them it's private for commercial purposes.</p>
            </Card>
          </Introdution>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
