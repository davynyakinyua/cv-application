import { useState } from 'react'
import './App.css'
import './reset.css'
import Head from './components/header/header.jsx'
import MainComponent from './components/main/mainContainer.jsx'
import Footer from './components/footer/footer.jsx'

function App() {
    return (
      <>
        <Head />
        <MainComponent />
        <Footer />
      </>
    );
}

export default App
