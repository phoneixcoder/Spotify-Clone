
// We are not taking care of user login/ signup ... we'll redirect the authentication to spotify and spotify care care of sign and login.

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "4fcf3c1fddfd456b822b24ecd2848bcf";
const redirectUri = "http://localhost:3000/";

// Giving the correct permissions.

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

//All the variables created above we are using those variables now.

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;