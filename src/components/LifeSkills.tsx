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
  margin: 3rem 0rem;
  .title {
    ${mobile({ fontSize: '45px' })};
  }
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  max-height: 320px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0rem;
  background-color: #81808013;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  /* ${mobile({ padding: '1rem ' })} */
`;
const SkillsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0rem;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  ${mobile({ flexWrap: 'wrap' })}
`;
const Underline = styled.hr`
  border-bottom: 2px solid red;
`;
const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-height: 450px; */
  /* max-height: 100%; */
  height: 350px;
  /* max-height: 950px; */
  max-width: 325px;
  width: 100%;
  padding: 2rem 0.5rem;
  border: 2px solid var(--clr-orange-title);
  border-radius: 16px;
  margin: 0rem 1rem;
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
  ${mobile({ fontSize: '26px', margin: '0' })}
`;

const SkillDescription = styled.p`
  direction: rtl;
  letter-spacing: 1px;
  color: #333;
  font-size: 15px;
  font-weight: 600;

  /* line-height: 1.33; */

  ${mobile({ lineHeight: '1.5' })}
`;
