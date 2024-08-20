import { useEffect, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dados, setDados] = useState();

  useEffect(() => {
    console.log('chamei o useEffect')

    // Maneira 2 - async/await com uma função ASYNC
    const realizarRequest = async () => {
      try {
        const res = await axios('https://api.discogs.com/releases/23949476?&key=fDPuzDCZvRVudVyXTyMJ&secret=ncLniYJXSgMCoydevODixTIDrgULdzLM')
        console.log('axios res.data', res.data)
        setDados(res.data)
      } catch (erro) {
        console.log('aconteceu um erro:', erro)
      }
    }

    realizarRequest()

    // Maneira ERRADA - await sem async
    // const res1 = await fetch('https://api.discogs.com/releases/23949476')
    // const res2 = await res1.json()
    // console.log(res2)

  }, [])

  if (!dados) {
    return <div>Fazendo o download..</div>
  }

  return <div>
    <a href={dados.uri}>
      <img src={dados.thumb} />
    </a>
    <div>{dados.artists_sort}</div>
    <div>{dados.title}</div>
    <div>{dados.styles.map(item => <div>{item}</div>)}</div>
  </div>
}

export default App
