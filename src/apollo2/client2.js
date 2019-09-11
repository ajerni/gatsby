import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export default new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/ck05dspnl13gs01d7htat4n7e/master',
  fetch,
});