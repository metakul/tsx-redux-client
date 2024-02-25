import React from 'react';
import { HomePageProps } from '../interfaces/interface';
import BlogPage from '../Components/BlogPage';

const HomePage: React.FC<HomePageProps> = () => {

  const containerStyle: React.CSSProperties = {
    
  };

  return (
    <div style={containerStyle}>
      <BlogPage  />
    </div>
  );
};

export default HomePage;
