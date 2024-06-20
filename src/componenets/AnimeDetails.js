import React from 'react';

// Ce composant prend une prop `anime` qui contient les détails de l'anime à afficher.
const AnimeDetails = ({ anime }) => {

    // Si aucune donnée d'anime n'est passée (anime est null ou undefined), afficher un message indiquant qu'aucun anime n'est sélectionné.
    if (!anime) return <p>No anime selected</p>;

     // Extraction des propriétés de l'objet anime.
    const title = anime.title.romaji || anime.title.english || anime.title.native;
    
    // Déstructuration des autres propriétés nécessaires pour l'affichage.
    const { episodes, startDate, averageScore, coverImage, description } = anime;

    // Rendu des détails de l'anime.
    // Affichage du titre, du nombre d'épisodes, de la date de début, de la note moyenne, de l'image de couverture, et de la description.
    return (
        <div>
            <h2>{title}</h2>
            <p>Episodes: {episodes}</p>
            <p>Start Date: {`${startDate.year}-${startDate.month}-${startDate.day}`}</p>
            <p>Average Score: {averageScore}</p>
            {coverImage && <img src={coverImage.large} alt={title} />}
            <p>{description}</p>
        </div>
    );
};

export default AnimeDetails;