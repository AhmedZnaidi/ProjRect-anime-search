// Importation des modules nécessaires depuis le package '@apollo/client'.
// ApolloClient est utilisé pour configurer et créer un client Apollo.
// InMemoryCache est une implémentation de cache qui stocke les résultats des requêtes GraphQL en mémoire.
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Création d'une instance d'ApolloClient avec une configuration spécifique.
// 1. uri: L'URL du serveur GraphQL avec lequel l'application va interagir.
// 2. cache: Une instance de InMemoryCache, qui gère la mise en cache des données en mémoire
const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache(),
});

// Exportation de l'instance d'ApolloClient pour qu'elle puisse être utilisée dans d'autres parties de l'application.
export default client;