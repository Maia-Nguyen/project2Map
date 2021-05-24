import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid Map Central</p>
        <ul>
          <li>
            <Link to="https://covidmapcentral-casesdata.netlify.app/">More Data</Link>
          </li>
          <li>
            <Link to="https://www.vaccines.gov/search/" target="_blank">Vaccines</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
