import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("signup");  

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="App">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Features />
      <Products onOpenModal={openModal} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} formType={modalType} />
    </div>
  );
}

export default App;
