import React from 'react';
import { BarLoader } from 'react-spinners';
import styled from 'styled-components';

const LoadingContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Loading({ loading }) {
  return (
    <LoadingContainer>
      <BarLoader loading={loading} color="#fff" />
    </LoadingContainer>
  );
}

export default Loading;
