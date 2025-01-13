const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.cesde.edu.co/'

const scrapeWebSide = async () =>{

    try {
        const response = await axios.get(url) // peticion a la url con axios
      
        const data = response.data // axios trae en data, el html de todo la pagina

      const $ = cheerio.load(data) // cheerio.load convierte el html en un objeto que simula el dom para poder manipularlo
        // $ es una funcion que es como un simil a document.querySelector('')
        const titles = []

        $('h2').each((index, element) => {
            titles.push($(element).text()); // Extrae el texto dentro de <h2>
        });

        console.log('Títulos extraídos:', titles);

    } catch (error) {
        console.log('Este es el error: ' + error)
    }
}

scrapeWebSide()
