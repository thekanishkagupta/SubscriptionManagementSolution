import React, { useEffect, useState } from "react";
import axios from "axios";
import Typo from "Components/Typo";

const USERS_ENDPOINT = "https://api.spotify.com/v1/me";

const SpotifySubscriptions = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});
  const SCOPES = [
    "user-read-private"
  ];
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken") );
    }
  }, []);

  const handleSubscription = () => {
    axios
      .get(USERS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
//   const handleLogin = () => {
//     window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true` as any;
//   };
return (<>
    <button onClick={handleSubscription}>SubScribed</button>
    {data ? <Typo>{data.product} </Typo> : <></>}
</>)
}

  export default SpotifySubscriptions;