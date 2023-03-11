import React from 'react';
import styled from 'styled-components';

type Props = {
  children: string | JSX.Element | JSX.Element[];
  padding: string;
  maxHeight?: string;
};

const Container = ({ children, padding, maxHeight }: Props) => {
  return (
    <Wrapper maxHeight={maxHeight} padding={padding}>
      {children}
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div<{ padding: string; maxHeight?: string }>`
  display: flex;
  width: 100%;
  padding: ${({ padding }) => padding};
  /* margin-bottom: 3rem; */
  background-color: #81808013;

  align-items: center;
  justify-content: center;
  border-radius: 16px;
  max-height: ${({ maxHeight }) => maxHeight && maxHeight};
`;
