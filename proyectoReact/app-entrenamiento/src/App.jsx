import { useAuthorization } from "./useAuthorization"

function App() {
  const {token} = useAuthorization();



  fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl',{
    method:'GET',
    headers:{
      'Authorization':`${token?.token_type} ${token?.access_token}`
    }
  })
  .then(response => {
    if(!response.ok){
      throw new Error('Error en la solicitud')
    }

    return response.json()
  })
  .then(data => console.log(data))




 
  return (
    <div>
     app de spotify
    </div>
  )
}

export default App
