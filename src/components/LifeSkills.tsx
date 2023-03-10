import React from 'react';
import styled from 'styled-components';
import { life_skills } from '../utils/lifeSkills';
import { SkillType } from '../utils/types';

const LifeSkills = () => {
  return (
    <Wrapper>
      <Title>במשך השנה הילדים ירכשו כלים לחיים</Title>
      <Container>
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
`;
const Title = styled.p`
  display: inline-block;
  font-size: 62px;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  border-bottom: 5px solid var(--clr-orange-title);
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 3.5rem 4rem;
  margin-bottom: 3rem;
  background-color: #81808013;
  align-items: center;
  border-radius: 16px;
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
