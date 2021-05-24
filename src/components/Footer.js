import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>Sources:</p>
        <a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet">Colby Fayock Covid-19 Map</a>
        <p>&copy; { new Date().getFullYear() } Golden Wind Designs</p>
      </Container>
    </footer>
  );
};

export default Footer;
