import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

interface Disco {
  uri: string;
  title: string;
  artists_sort: string;
  thumb: string;
  styles: string[];
  blocked_from_sale: boolean;
  id: number;
}

function App() {
  const [dados, setDados] = useState<Disco>();

  useEffect(() => {
    console.log('chamei o useEffect')

    // Maneira 2 - async/await com uma função ASYNC
    const realizarRequest = async () => {
      try {
        const res = await axios<Disco>('https://api.discogs.com/releases/23949476?&key=fDPuzDCZvRVudVyXTyMJ&secret=ncLniYJXSgMCoydevODixTIDrgULdzLM')
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
    <div>id: {dados.id}</div>
    <div>{dados.artists_sort}</div>
    <div>{dados.title}</div>
    <div>{dados.styles.map((item) => <div>{item}</div>)}</div>
    <div>Bloqueado de vender? {dados.blocked_from_sale ? 'sim' : 'nao'}</div>
  </div>
}

export default App