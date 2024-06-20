// Importation du module gql de '@apollo/client' pour construire des requêtes GraphQL.
import { gql } from '@apollo/client';

// Importation de l'instance ApolloClient configurée depuis le fichier apolloClient.js.
import client from '../appolloClient';

// Déclaration et exportation de la fonction asynchrone searchAnimeByName.
// Cette fonction prend un paramètre animeName qui est le nom de l'anime à rechercher.
export const searchAnimeByName = async (animeName) => {

    // Définition de la requête GraphQL en utilisant la fonction gql.
    // Cette requête recherche un média de type ANIME par nom.
    const query = gql`
        query ($search: String) {
            Media(search: $search, type: ANIME) {
                id
                title {
                    romaji
                    english
                    native
                }
                description
                episodes
                startDate {
                    year
                    month
                    day
                }
                averageScore
                coverImage {
                    large
                }
            }
        }
    `;

    // Définition des variables pour la requête GraphQL.
    const variables = {
        search: animeName,
    };

     // Exécution de la requête GraphQL en utilisant l'instance ApolloClient.
    // La méthode query de ApolloClient prend la requête et les variables en paramètre.
    // La réponse de la requête est stockée dans la variable response.
    const response = await client.query({ query, variables });

    // Retourne les données Media de la réponse de la requête.
    return response.data.Media;
};