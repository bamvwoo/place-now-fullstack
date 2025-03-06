import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import styled from 'styled-components';
import Header from './components/Header';

function App() {
  return (
    <>
      <div id="wrapper">
        <Header />
        <PageContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Main /> } />
            </Routes>
          </BrowserRouter>
        </PageContainer>
      </div>
    </>
  )
}

export default App;

const PageContainer = styled.main`
  display: flex;
  width: calc(100% - var(--global-header-width));
  height: 100%;
`;