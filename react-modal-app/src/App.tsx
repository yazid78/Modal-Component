// src/App.tsx
import React, { useState } from 'react';
import Modal from './components/Modal.tsx';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
