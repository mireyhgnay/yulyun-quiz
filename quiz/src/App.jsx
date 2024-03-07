import React, { useState } from 'react';
import './styles/main.scss';

import { BarLoader } from 'react-spinners';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container">
      {
        loading
          ? (
            <section className="loading">
              <BarLoader loading={loading} color="#fff" className="loading_bar" />
            </section>
          ) : (
            <div>메인페이지 화면!</div>
          )
      }
    </div>

  );
}
