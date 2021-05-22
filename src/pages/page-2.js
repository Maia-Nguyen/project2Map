import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>More COVID-19 Data</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Link to React App</h1>
      </Container>
    </Layout>
  );
};

export default SecondPage;
