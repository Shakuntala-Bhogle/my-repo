
import './App.css';
import Header from "./components/Header";
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Nav />
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
