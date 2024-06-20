import React, { useState } from 'react';

// Ce composant prend une prop `onSearch` qui est une fonction à appeler lorsque l'utilisateur soumet une recherche.
const SearchBar = ({ onSearch }) => {

    // Déclaration d'un état local `searchTerm` avec un état initial vide.
    const [searchTerm, setSearchTerm] = useState('');

    // Fonction de gestion de la soumission du formulaire.
    // Elle empêche le comportement par défaut du formulaire (rechargement de la page) et appelle la fonction `onSearch` avec le terme de recherche.
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    // Rendu du formulaire de recherche.
    // Le formulaire contient un champ de texte et un bouton de soumission.
    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for an anime"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

// Exportation du composant SearchBar pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default SearchBar;