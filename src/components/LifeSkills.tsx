import React from 'react';
import styled from 'styled-components';
import { life_skills } from '../utils/lifeSkills';
import { mobile } from '../utils/responsive';
import { SkillType } from '../utils/types';

const LifeSkills = () => {
  return (
    <Wrapper>
      <p className='title'>במשך השנה הילדים ירכשו כלים לחיים</p>

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
  margin-top: 3rem;
  .title {
    ${mobile({ fontSize: '45px' })};
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 3.5rem 4rem;
  background-color: #81808013;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  ${mobile({ padding: '1rem 0rem' })}
`;
const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  ${mobile({ flexWrap: 'wrap' })}
`;
const Underline = styled.hr`
  border-bottom: 2px solid red;
`;
const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 250px; */
  width: 100%;
  padding: 0rem 1rem;
  ${mobile({
    height: 'auto',
    padding: '1.5rem 3rem',
    width: '100%',
    justifyContent: 'center',
  })}
`;
const SkillIcon = styled.img`
  width: 96px;
  height: 90px;
  margin-bottom: 16px;
  ${mobile({ marginBottom: '10px' })}
`;
const SkillTitle = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  color: #ec7d10;
  margin-bottom: 4px;
  ${mobile({ fontSize: '26px', margin: '0' })}
`;

const SkillDescription = styled.p`
  direction: rtl;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  ${mobile({ lineHeight: '1.5' })}
`;
