import React, { useState, useEffect } from 'react';
import Header  from './components/Header';
import Sidebar from './components/Sidebar'; 
import Main from './components/Main';
import Content from './components/content';
import Profile from './components/profile';
import Stats from './components/Stats';
import Team from './components/Team';
import Event from './components/Event';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }


  return (
      <div className={`${darkMode ? "dark" : ""}  font-quickSand`}>
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />

          <Sidebar isSidebarOpen={isSidebarOpen}/>

          <Main >
            <content>
              <Stats darkMode={darkMode} />

              <div className='flex flex-col gap-3 lg:flex-row'>
                <Team />
                <Event />
              </div>
            </content>
            <Profile />
          </Main>
      </div>
  );
};

export default App;



