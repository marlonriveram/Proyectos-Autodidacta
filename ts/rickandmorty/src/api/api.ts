import { APIRickAndMorty,Result } from "../data/apiTypes"

export async function apiRickAndMorty(url:string):Promise<APIRickAndMorty> {
   try {
    const response = await fetch(url)
    const data = await response.json() as APIRickAndMorty // asersion

    return data
   } catch (error) {
     throw new Error('se genero un error')
   }

 
}
