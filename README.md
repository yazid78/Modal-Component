# React Modal Component

lien vers npm: https://www.npmjs.com/package/react-modal-tezuka?activeTab=readme

Pour utiliser la modale, copiez ce code qui inclut la gestion d'état de la modale :

```javascript
import React from "react";
import { Modal } from "react-modal-tezuka";

const App = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h1>Test React Modal App</h1>
      <button onClick={handleOpenModal}>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
```
