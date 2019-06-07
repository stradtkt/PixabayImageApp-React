import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/layout/Navbar';
import Search from './components/search/Search';


const App = () => {
  return (
    <MuiThemeProvider>
        <Navbar/>
        <Search/>
    </MuiThemeProvider>
  );
}

export default App;
