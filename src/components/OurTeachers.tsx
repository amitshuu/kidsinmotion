import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import yaniv from '../assets/yanivvvv.png';
const OurTeachers = () => {
  return (
    <Wrapper>
      <h2 className='title'> הצוות שלנו</h2>

      <Container padding='3rem 4rem'>
        <TeachersArticle>
          <TeacherDiv>
            <TeacherImage src={yaniv} />
            <TeacherName>יניב סופר</TeacherName>
            <TeacherBio>מייסד ילדים בתנועה</TeacherBio>
            <TeacherBio>מדריך ברייקדאנס והיפ הופ</TeacherBio>
            <TeacherDescription>
              רקדן מקצועי, כיאוגרף,עוסק בריקד למעלה מ10 שנים מלמד 7 שנים בבתי
              ספר וסטודיואים ברחבי הארץ מגילי 6 עד 18+. התחרתי עם הקבוצה שלי
              בתחרויות בארץ ובעולם. והעלתי מופעים בתור רקדן ושותף לכיאוגרפיות
              מהופעות בשגרירות דרום קוראיה ועד בר מצוות בת מצוות.
            </TeacherDescription>
          </TeacherDiv>
          <TeacherDiv>
            <TeacherImage src={yaniv} />
            <TeacherName>יניב סופר</TeacherName>
            <TeacherBio>מייסד ילדים בתנועה</TeacherBio>
            <TeacherBio>מדריך ברייקדאנס והיפ הופ</TeacherBio>
            <TeacherDescription>
              רקדן מקצועי, כיאוגרף,עוסק בריקד למעלה מ10 שנים מלמד 7 שנים בבתי
              ספר וסטודיואים ברחבי הארץ מגילי 6 עד 18+. התחרתי עם הקבוצה שלי
              בתחרויות בארץ ובעולם. והעלתי מופעים בתור רקדן ושותף לכיאוגרפיות
              מהופעות בשגרירות דרום קוראיה ועד בר מצוות בת מצוות.
            </TeacherDescription>
          </TeacherDiv>
          <TeacherDiv>
            <TeacherImage src={yaniv} />
            <TeacherName>יניב סופר</TeacherName>
            <TeacherBio>מייסד ילדים בתנועה</TeacherBio>
            <TeacherBio>מדריך ברייקדאנס והיפ הופ</TeacherBio>
            <TeacherDescription>
              רקדן מקצועי, כיאוגרף,עוסק בריקד למעלה מ10 שנים מלמד 7 שנים בבתי
              ספר וסטודיואים ברחבי הארץ מגילי 6 עד 18+. התחרתי עם הקבוצה שלי
              בתחרויות בארץ ובעולם. והעלתי מופעים בתור רקדן ושותף לכיאוגרפיות
              מהופעות בשגרירות דרום קוראיה ועד בר מצוות בת מצוות.
            </TeacherDescription>
          </TeacherDiv>
        </TeachersArticle>
      </Container>
    </Wrapper>
  );
};

export default OurTeachers;

const Wrapper = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;
const TeachersArticle = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const TeacherDiv = styled.div`
  display: flex;
  width: 30%;
  text-align: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 16px;
`;
const TeacherImage = styled.img`
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  height: 180px;
  object-fit: cover;
`;
const TeacherName = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 26px;
  color: var(--clr-orange-title);
  font-weight: bold;
  align-self: center;
  margin-top: 0.5rem;
`;
const TeacherBio = styled.p`
  color: #999;
  font-weight: bold;
  font-size: 16px;
`;
const TeacherDescription = styled.p`
  direction: rtl;
  font-weight: 500;
  color: #333;
  padding: 16px;
  font-size: 16px;
  letter-spacing: 1px;
`;
