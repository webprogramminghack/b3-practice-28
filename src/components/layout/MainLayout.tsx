import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        {children}
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default MainLayout;
