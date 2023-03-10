import React from 'react';
import styled from 'styled-components';
import { life_skills } from '../utils/lifeSkills';
import { SkillType } from '../utils/types';
import Container from './Container';

const LifeSkills = () => {
  return (
    <Wrapper>
      <p className='title'>
        במשך השנה
        <br /> הילדים ירכשו כלים לחיים
      </p>

      <Container padding='3.5rem 4rem'>
        <SkillsContainer>
          {life_skills.map((skill: SkillType) => {
            return (
              <SkillDiv>
                <SkillIcon src={skill.skillIcon} />
                <SkillTitle>{skill.skillTitle}</SkillTitle>
                <SkillDescription>{skill.skillDesc}</SkillDescription>
              </SkillDiv>
            );
          })}
        </SkillsContainer>
      </Container>
    </Wrapper>
  );
};

export default LifeSkills;

const Wrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 3rem; */
`;
const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 250px;
  width: 50%;
  padding: 0rem 1rem;
`;
const SkillIcon = styled.img`
  width: 96px;
  height: 90px;
  margin-bottom: 16px;
`;
const SkillTitle = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  color: #ec7d10;
  margin-bottom: 4px;
`;

const SkillDescription = styled.p`
  direction: rtl;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
