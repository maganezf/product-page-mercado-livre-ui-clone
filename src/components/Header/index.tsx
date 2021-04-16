import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      UI Clone - Product Page Mercado Livre - by{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/maganezf"
      >
        maganezf
      </a>
    </Container>
  );
};

export default Header;
