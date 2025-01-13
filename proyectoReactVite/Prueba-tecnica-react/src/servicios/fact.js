const Api_enpoint_json = 'https://catfact.ninja/fact'
/*Nota: como es una funcion asincrona retorna una promesa, por lo que  para poder usar el valor retornado
se debe usar un metodo de prosmesas como then, o asycn/await
*/ 

export const opterFact = async () => {
  const response = await fetch(Api_enpoint_json)
  const data = await response.json()
  const { fact } = data
  return fact
}
