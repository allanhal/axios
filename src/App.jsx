import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(() => {
    console.log('chamei o useEffect')

    function nomeDaFuncao(res) { 
      //res é uma STREAM (linha, riacho, FLUXO)
      return res.json() 
    }
    // Maneira 1 - THEN
    fetch('https://api.discogs.com/releases/23949476')
      // .then(res => res.json())
      .then(nomeDaFuncao)
      .then(res => console.log(res))
      .catch(erro => console.log(erro))


    // Maneira 2 - async/await com uma função ASYNC
    const realizarRequest = async () => {
      try {
        const res1 = await fetch('https://api.discogs.com/releases/23949476')
        const res2 = await res1.json()
        console.log(res2)
      } catch (erro) {
        console.log(erro)
      }
    }

    realizarRequest()

    // Maneira ERRADA - await sem async
    // const res1 = await fetch('https://api.discogs.com/releases/23949476')
    // const res2 = await res1.json()
    // console.log(res2)

  }, [])

  return <div>
    <div>imagem</div>
    <div>titulo</div>
    <div>artista</div>
    <div>
      <div>tag 1</div>
      <div>tag 2</div>
    </div>
  </div>
}

export default App
