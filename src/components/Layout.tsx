import React from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  box-sizing: border-box;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default Layout;