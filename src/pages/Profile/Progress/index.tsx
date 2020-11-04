import React from 'react';

import Section from '../../../components/Section';
import StarProgress from '../../../components/StarProgress';
import ExperienceProgress from '../../../components/ExperienceProgress';

import languageColor from './languageColor';
import {
  Header,
  Title,
  ProgressItem,
} from './styles';

interface IProgress {
  title: string;
  experience: number;
  proficiency: number;
}

const Progress: React.FC = (): JSX.Element => {
  const progress: IProgress[] = [
    { title: "Java", experience: 10, proficiency: 1 },
    { title: "NodeJS", experience: 1, proficiency: .4 },
    { title: "React Native", experience: 2, proficiency: .8 },
    { title: "GWT", experience: 7, proficiency: .8 },
    { title: "ReactJS", experience: 1, proficiency: .7 },
    { title: "HTML", experience: 10, proficiency: .9 },
    { title: "JavaScript", experience: 10, proficiency: .8 },
    { title: "CSS", experience: 10, proficiency: .6 },
    { title: "PostgresSQL", experience: 10, proficiency: .7 },
    { title: "SQLite", experience: 7, proficiency: .7 },
  ];
  return (
    <Section title="Technologies progress">
      <Header>
        <Title>{" "}</Title>
        <span>Experience<br />from 0 to +10 years</span>
        <span>Proficiency</span>
      </Header>
      {progress.map(({ title, experience, proficiency }) => {
        let color = languageColor.find(language => language.language.toLowerCase() === title.toLowerCase());
        return (
          <ProgressItem
            key={title}
          >
            <Title>{title}</Title>
            <ExperienceProgress
              value={experience}
              color={!color ? 'rgb(43,194,83)' : color.color}
            />
            <StarProgress value={proficiency} />
          </ProgressItem>
        );
      })}
    </Section>
  );
}

export default Progress;
