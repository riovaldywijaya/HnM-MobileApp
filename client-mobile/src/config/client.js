import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://c9e3-103-156-164-57.ngrok-free.app', // BERUBAH - UBAH
  uri: 'http://54.151.159.132', // BERUBAH - UBAH
  cache: new InMemoryCache(),
});

export default client;
