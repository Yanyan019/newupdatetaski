//MAIN
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* import Overview from './pages/Overview'; */
//COMPONENTS
import Navbar from './components/navbar';
import Theme from './pages/theme';
import Home from './pages/Home';
import Calendars from './pages/calendars';
import Task from './Task'; // Kung ito ang tama na path
import Analytics from './pages/analytics';
/* import Signin from './pages/signin'; */
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function App() {


  return (
    <AppContainer>
      <Router>
            {/* <Route path="/signin" element={<Signin />} /> */}
            <Navbar />
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/theme" element={<Theme />} />
              <Route path="/calendars" element={<Calendars />} />
              <Route path="/Task" element={<Task />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;


