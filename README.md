# React Modal Component

### Version de Node Js : v18.17.0

## Guide installation

lien vers npm: https://www.npmjs.com/package/react-modal-tezuka?activeTab=readme

copie ce code : npm i react-modal-tezuka
et coller le dans le terminal de votre projet

## Example

Pour utiliser la modale, copiez ce code qui inclut la gestion d'état de la modale :

```javascript
import React from "react"; // Importation de React pour pouvoir utiliser les hooks et les composants
import { Modal } from "react-modal-tezuka"; // Importation du composant Modal depuis la bibliothèque 'react-modal-tezuka'

const App = () => {
  // Déclaration d'un état local pour gérer la visibilité de la modale
  // showModal est la variable d'état, setShowModal est la fonction pour la mettre à jour
  const [showModal, setShowModal] = React.useState(false);

  // Fonction pour ouvrir la modale en mettant showModal à true
  const handleOpenModal = () => setShowModal(true);

  // Fonction pour fermer la modale en mettant showModal à false
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      {/* Titre de l'application */}
      <h1>Test React Modal App</h1>

      {/* Bouton pour ouvrir la modale. 
      Lorsque l'utilisateur clique, handleOpenModal est appelé pour afficher la modale */}
      <button onClick={handleOpenModal}>Show Modal</button>

      {/* Composant Modal, rendu conditionnellement en fonction de showModal.
      - show: contrôle la visibilité de la modale.
      - onClose: fonction appelée pour fermer la modale. */}
      <Modal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default App; // Exportation du composant App pour pouvoir l'utiliser ailleurs
```

## Customization

You can customize the appearance and behavior of the modal by passing additional props or styling it using CSS. Here’s an example:

````javascript
<Modal
  show={showModal}
  onClose={handleCloseModal}
  style={{ backgroundColor: "lightblue", padding: "20px", borderRadius: "10px" }}
>
  <h2>Customized Modal</h2>
  <p>This modal has custom styles applied to it.</p>
  <button onClick={handleCloseModal}>Close Modal</button>
</Modal>

Styling the Modal
To style the modal, you can pass custom styles directly through the style prop, or you can use CSS classes.

```javascript
.custom-modal {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

<Modal
  show={showModal}
  onClose={handleCloseModal}
  className="custom-modal"
>
  <h2>Styled Modal</h2>
  <p>This modal uses custom CSS classes for styling.</p>
  <button onClick={handleCloseModal}>Close Modal</button>
</Modal>


````
