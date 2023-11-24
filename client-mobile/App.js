import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/navigators/MainTab';
import { ApolloProvider } from '@apollo/client';
import client from './src/config/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </ApolloProvider>
  );
}
