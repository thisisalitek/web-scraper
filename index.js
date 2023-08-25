const axios = require('axios')
const cheerio = require('cheerio')

const sourceBaseURL=`https://developer.4me.com/`
fetchScimSchemas = async (pathName='')=>{
  try {
    const response=await axios.get(`${sourceBaseURL}${pathName}`)
    const html = response.data
    const $=cheerio.load(html)
    $(`body #wrapper .content a`).each((index,el)=>{
      const a=$(el)
      if(a.attr('href').startsWith('/')){
        console.log(a.text() , `:`, a.attr('href'))
      }
    })
  } catch (err) {
    console.error(err)
  }
}


fetchScimSchemas()

// fetchScimRestApi = async (pathName='')=>{
//   try {
//     const response=await axios.get(`${sourceBaseURL}/v1${pathName}`)
//     const html = response.data
//     const $=cheerio.load(html)
//     $(`body #wrapper .content a`).each((index,el)=>{
//       const a=$(el)
//       if(a.attr('href').startsWith('/')){
//         console.log(a.text() , `:`, a.attr('href'))
//       }
//     })
//   } catch (err) {
//     console.error(err)
//   }
// }
