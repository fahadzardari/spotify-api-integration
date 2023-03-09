import { useEffect, useState } from "react";
import axios from "axios";
function Login() {
  const CLIENT_ID = "30d2dd99024f487d8f08cc303a0e936c";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/artists?ids=5x5QpMsxPAaMgm0bxQyKJC,4eMgoZVRBGSKsAZOelb52Q,0C9MlEXA0UUxFHyL8UQxQD", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    setArtists(data);
    console.log(artists);
//     console.log(token)
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Spotify React</h1>
          {!token ? (
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              Login to Spotify
            </a>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </header>
      </div>

      <div>
        <form onSubmit={searchArtists}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button type={"submit"}>Search</button>
        </form>
      </div>
    </>
  );
}

export default Login;


// https://api.spotify.com/v1/artists?ids=5nWYvcpaqKtp08cYxjOfFr%4aajGre4nwTLmu8tbZ2vom