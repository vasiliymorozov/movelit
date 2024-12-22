// Require the spotify-web-api-node package
const SpotifyWebApi = require('spotify-web-api-node');

// Create an instance of the Spotify API wrapper
const spotifyApi = new SpotifyWebApi({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    
    // Save the access token so that it's used in future requests
    spotifyApi.setAccessToken(data.body['access_token']);

    // Example: Get an artist's albums
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
      function(data) {
        console.log('Artist albums', data.body);
      },
      function(err) {
        console.error(err);
      }
    );
  },
  function(err) {
    console.error('Something went wrong when retrieving an access token', err);
  }
);
