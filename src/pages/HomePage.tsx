import React from 'react';
import { HomePageProps } from '../interfaces/interface';
import Blogs from '../Components/Tab1';

import { Container } from '@mui/material';

const HomePage: React.FC<HomePageProps> = () => {



  return (
     <Container className="container">
      <Blogs/>
     </Container>
  );
};

export default HomePage;
