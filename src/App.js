
import './App.css';
import Header from "./components/Header";
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Little Lemon Restaurant</title>
    </head>
    <Header />  
    <Nav />
    <Main />
    <Footer />

    </>
  );
}

export default App;
