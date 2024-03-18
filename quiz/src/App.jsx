import React, { useState } from 'react';
import styled from 'styled-components';

import Loading from './pages/Loading';

const Container = styled.div`
  position: relative;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  background-color: #f4d160;
`;

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Container>
      {
        loading
          ? (
            <Loading />
          ) : (
            <div>메인페이지 화면!</div>
          )
      }
    </Container>
  );
}
