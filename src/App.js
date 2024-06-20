import React, { useState } from 'react';
import './App.css';
import SearchBar from './componenets/SearchBar';
import AnimeDetails from './componenets/AnimeDetails';

// Importation de la fonction utilitaire pour rechercher des animes par nom.
import { searchAnimeByName } from './tools/api';

function App() {

   // Déclaration de l'état local pour stocker les données de l'anime et les erreurs potentielles.
    const [anime, setAnime] = useState(null);
    const [error, setError] = useState(null);

    // Fonction de gestion de la recherche asynchrone.
    // Prend un terme de recherche en paramètre et utilise la fonction searchAnimeByName pour récupérer les données de l'anime.
    const handleSearch = async (searchTerm) => {
        try {
          // Recherche de l'anime par nom.
            const animeData = await searchAnimeByName(searchTerm);

          // Mise à jour de l'état avec les données de l'anime et réinitialisation des erreurs.
            setAnime(animeData);
            setError(null);
        } catch (err) {
           // En cas d'erreur, mise à jour de l'état avec le message d'erreur et réinitialisation des données de l'anime.
            setError(err.message);
            setAnime(null);
        }
    };

    // Rendu du composant principal de l'application.
    return (
        <div className="App">
            <header className="App-header">
                <h1>AniList Anime Search</h1>
            </header>
            <SearchBar onSearch={handleSearch} />
            {error && <p>{error}</p>}
            <AnimeDetails anime={anime} />
        </div>
    );
}

export default App;