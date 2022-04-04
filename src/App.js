
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import Refeicao from './components/refeicao/refeicao';
import Cultura from './components/cultura/cultura';
import Mobilidade from './components/mobilidade/mobilidade';
import Saude from './components/saude/saude';
import Educacao from './components/educacao/educacao';
import{useState} from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';

const App = ()=> {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () =>{
    setSidebarOpen(true);
  }
  const closeSidebar = () =>{
    setSidebarOpen(false)
  }
  return(
    <BrowserRouter>
    <div className="container" >
    <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    <Routes>
          <Route path="/" element= {<Main />}/>
          <Route path="/refeicao" element= {<Refeicao />}/>
          <Route path="/cultura" element= {<Cultura />}/>
          <Route path="/mobilidade" element= {<Mobilidade />}/>
          <Route path="/saude" element= {<Saude />}/>
          <Route path="/educacao" element= {<Educacao />}/>
    </Routes>
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
  </div>
    </BrowserRouter>
  )
}

export default App;
