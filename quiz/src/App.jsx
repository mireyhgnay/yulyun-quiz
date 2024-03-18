import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Loading from './pages/Loading';
import Login from './pages/Login';

const Container = styled.div`
  position: relative;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  background-color: #f4d160;
`;

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(true);
    }, 3000); // 의도적으로 3초 로딩 설정

    return () => clearTimeout(delay); // 언마운트될 때 clearTimeout
  }, []);

  return (
    <Container>
      {
        loading ? <Loading /> : <Login />
      }
    </Container>
  );
}
