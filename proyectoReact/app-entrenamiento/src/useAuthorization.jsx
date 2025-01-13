import { useEffect, useState } from "react";

const client_id = 'a074b4fc9a084cf98fec000fce1553a9';
const client_secret = '763375a7494d4579b00d2e0721102c0b';

const useAuthorization = () =>{
    const [token,setToken] = useState();
    useEffect(()=>{
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
        },
        form: {
          grant_type: 'client_credentials'
        },
        json: true
      };
      
      fetch(authOptions.url, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(authOptions.form)
      })
      .then(response => response.json())
      .then(data => setToken(data))
      .catch(error => {
        console.error('Error:', error);
      });
    },[])
    return {token}
}

export { useAuthorization };