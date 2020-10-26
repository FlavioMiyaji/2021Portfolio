import React, { useEffect, useState } from 'react';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

import { APIUser, APIRepo } from '../../@types';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
  RepoIcon,
} from './styles';
import { useParams } from 'react-router-dom';

interface IProfileData {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const [data, setData] = useState<IProfileData>({} as IProfileData);
  useEffect(() => {
    const loadProfile = async () => {
      const loadData = async () => {
        const responses = await Promise.all([
          fetch(`http://api.github.com/users/FlavioMiyaji`),
          fetch(`http://api.github.com/users/FlavioMiyaji/repos`),
        ]);
        const [userResponse, reposResponse] = responses;
        if (userResponse.status === 404) {
          setData({ error: 'User not found!' });
          return;
        }
        const user: APIUser = await userResponse.json();
        const repos: APIRepo[] = await reposResponse.json();

        const shuffledRepos = repos.sort(() => 0.5 - Math.random());
        const sliceRepos = shuffledRepos.slice(0, 6);

        setData({ user, repos: sliceRepos });
      };
      loadData();
    }
    loadProfile();
  }, []);
  const { user, repos, error } = data;
  if (error) {
    return <h1>{error}</h1>;
  }
  if (!user || !repos) {
    return <h1>Carregando...</h1>;
  }
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      {!!repos && (<span className="number">{user.public_repos}</span>)}
    </div>
  );
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
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
            <TabContent />
            <span className="line" />
          </Tab>
          {!!repos && (
            <Repos>
              <h2>Random repos</h2>
              <div>
              </div>
            </Repos>
          )}
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
