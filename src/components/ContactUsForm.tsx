import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';
import { mobile } from '../utils/responsive';
import { Element } from 'react-scroll';

const ContactUsForm = () => {
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSuccess = () => {
    setFullName('');
    setMessage('');
    setPhoneNumber('');
    setLoading(false);
    setSuccess(true);
  };

  const templateParams = {
    fullName,
    message,
    phoneNumber,
  };

  const sendMessage = async () => {
    setLoading(true);
    try {
      await emailjs.send(
        'service_bns07jt',
        'template_emjbuae',
        templateParams,
        'ufR-KZS0kTLwnQ6Ao'
      );
      onSuccess();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <SubTitle>נשמח לשמוע ממך</SubTitle>

        <InputDiv>
          <Input
            type='text'
            required={true}
            name='fullName'
            placeholder='שם מלא'
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />

          <Input
            type='text'
            required={true}
            name='phone'
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='מספר טלפון'
            value={phoneNumber}
          />

          <TextArea
            value={message}
            required
            name='message'
            placeholder='הודעה'
            onChange={(e) => setMessage(e.target.value)}
          />
        </InputDiv>
        <ButtonContainer>
          <Button>צרו קשר</Button>
          {loading ? (
            <Loader
              visible={true}
              height='80'
              width='80'
              ariaLabel='blocks-loading'
              wrapperStyle={{}}
              wrapperClass='blocks-wrapper'
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          ) : success ? (
            <SuccessMessageDiv>
              <SuccessMessage>פרטייך נשלחו בהצלחה! </SuccessMessage>
            </SuccessMessageDiv>
          ) : null}
        </ButtonContainer>
        {error ? (
          <p style={{ direction: 'rtl' }}>השירות אינו זמין כעת, מצטערים.</p>
        ) : null}
      </Form>
    </>
  );
};

export default ContactUsForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  padding: 10px 5px;
  border: none;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  direction: rtl;
  &:focus {
    border: 1px solid var(--clr-orange-title);
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
    padding: 0px 6px;
  }
`;
const TextArea = styled.textarea`
  padding: 10px 5px;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: none;
  resize: vertical;
  border: 1px solid rgb(0, 0, 0, 0.1);
  font-family: inherit;
  direction: rtl;
  &:focus {
    border: 1px solid var(--clr-orange-title);
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
    padding: 0px 6px;
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 35%;
  ${mobile({
    width: '90%',
  })}
`;

const Button = styled.button`
  background-color: #ff914de1;
  outline: none;
  border: none;
  width: 35%;
  color: white;
  font-size: 16px;
  padding: 11px 25px 10px 27px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
  ${mobile({
    width: '90%',
  })}
  &:hover {
    background-color: var(--clr-orange-title);
  }
`;

const Loader = styled(ColorRing)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonContainer = styled.div`
  width: 100%;
  align-items: center;
  position: relative;
  height: 125px;
  display: flex;
  flex-direction: column;
  margin-top: 0.6rem;
`;

const SuccessMessageDiv = styled.div`
  margin-top: 0.5rem;
  width: 35%;
  padding: 6px;
  border-radius: 6px;
  background-color: #e0ffc7;
  border: 1px solid #b4d39b;
  ${mobile({
    width: '90%',
  })}
`;
const SuccessMessage = styled.p`
  direction: rtl;
`;

const SubTitle = styled.p`
  font-size: 48px;
  color: #333;

  margin-bottom: 2rem;
  ${mobile({ fontSize: '42px' })}
`;
