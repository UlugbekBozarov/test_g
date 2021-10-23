import './App.scss';
import Footer from './Components/footer/Footer';
import LeftBar from './Components/left-bar/LeftBar';
import Sidebar from './Components/sidebar/Sidebar';
import Routes from './Routes';

function App() {
  return (
    <div id="app">
      <Sidebar />
      <div className="content" style={{zIndex: 1}}>
        <div className="left_block">
          <LeftBar />
        </div>
        <div className="content_block">
          <Routes />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
