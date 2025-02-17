'use client';

import { useRouter } from 'next/navigation'



const Sobre = () => {

  const router = useRouter()

  return <div className="container h-screen">
    <div className="font-inter font-extralight text-justify text-2xl text-white">
      <p className="mt-4">
        Este site foi criado para reunir e apresentar informações sobre o universo de Star Wars de forma organizada e acessível.
        Nosso objetivo é fornecer uma experiência interativa para fãs, permitindo explorar personagens, veículos, locais, espécies e mais.
      </p>
      <p className="mt-4">
        Este site não gera lucro e tem fins exclusivamente educacionais e informativos.
        O uso de imagens e informações segue as diretrizes de seus respectivos proprietários.
      </p>
      <p className="mt-4 text-white">
        Os dados e imagens apresentados neste site são obtidos de fontes públicas, incluindo <a href="https://starwars-databank.vercel.app/" className="text-blue-400 underline">Star Wars Databank</a> e <a href="https://starwars.fandom.com/wiki/Main_Page" className="text-blue-400 underline">Star Wars Wiki</a>.
        Não reivindicamos a propriedade de nenhum conteúdo relacionado a Star Wars.
      </p>
      <p className="py-12 mt-4 bg-gray-950 text-white text-center">
        Para sugestões ou dúvidas, entre em contato pelo e-mail: <a href="mailto:seuemail@email.com" rel="noopener noreferrer" className="text-blue-400 underline">yuritm.dev@hotmail.com</a>.
      </p>
      <button onClick={() => router.push('/')} className="mt-6 bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition">
        Voltar para a Home
      </button>
    </div>
  </div>;
};

export default Sobre;