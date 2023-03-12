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
                <SkillDescription
                  style={{
                    marginBottom:
                      skill.skillTitle === 'הגשמה עצמית' ? '-16px' : '0px',
                  }}
                >
                  {skill.skillDesc}
                </SkillDescription>
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
  padding: 3.5rem 2rem;
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
  max-height: 350px;
  width: 100%;
  padding: 3rem 0.4rem;
  border: 2px solid var(--clr-orange-title);
  border-radius: 16px;
  margin-left: 2rem;
  overflow: hidden;
  ${mobile({
    height: 'auto',
    padding: '3rem 3rem',
    width: '100%',
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
  font-size: 16px;
  font-weight: 600;

  /* line-height: 1.33; */

  ${mobile({ lineHeight: '1.5' })}
`;
