import React from 'react';
import styled from 'styled-components';
import { life_skills } from '../utils/lifeSkills';
import { mobile } from '../utils/responsive';
import { SkillType } from '../utils/types';
import BackgroundImage from '../assets/gplaypattern.png';

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
  margin: 3rem 0rem;
  .title {
    ${mobile({ fontSize: '38px' })};
  }
`;

const Container = styled.div`
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 2rem 0rem;
  background-color: #81808013;
  background-image: url(${BackgroundImage});
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 22px;
  max-width: 1250px;
  margin: 0 auto;
  ${mobile({
    justifyContent: 'center',
    padding: '1rem',
  })}
`;

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  align-items: center;
  justify-content: center;
  max-width: 275px;
  width: 100%;
  padding: 2rem 1rem;
  border: 1px solid #d7d6d6;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  overflow: hidden;
  ${mobile({
    height: 'auto',
    padding: '1rem ',
    width: '100%',
    maxWidth: '450px',
    maxHeight: '450px',
    marginBottom: '2rem',
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
  ${mobile({ fontSize: '26px', marginBottom: '0.5rem' })}
`;

const SkillDescription = styled.p`
  direction: rtl;
  /* letter-spacing: 1px; */
  color: #333;
  font-size: 16px;
  font-weight: 600;

  /* line-height: 1.33; */

  ${mobile({ lineHeight: '1.5' })}
`;
