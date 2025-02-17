"use client";
import { useRouter } from 'next/navigation';

const thumbs = [
  {
    name: "Personagens",
    path: "/personagens",
    imgUrl: "https://lumiere-a.akamaihd.net/v1/images/databank_aaylasecura_01_169_39a65af2.jpeg",
  },
  {
    name: "Criaturas",
    path: "/criaturas",
    imgUrl: "https://lumiere-a.akamaihd.net/v1/images/databank_acklay_01_169_e544124f.jpeg",
  },
  {
    name: "Dróides",
    path: "/droides",
    imgUrl: "https://lumiere-a.akamaihd.net/v1/images/2-1b-droid-main-image_546a90ad.jpeg",
  },
  {
    name: "Locais",
    path: "/locais",
    imgUrl: "https://lumiere-a.akamaihd.net/v1/images/image_7f322dba.jpeg",
  },
  {
    name: "Espécies",
    path: "/especies",
    imgUrl: "https://lumiere-a.akamaihd.net/v1/images/tlj-abednedo-databank-main-image_bd8babfb.jpeg"
  },
  {
    name: "Veículos",
    path: "/veiculos",
    imgUrl: "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-05-26_at_5_16a39e17.png"
  },
  {
    name: "Organizações",
    path: "/organizaçoes",
    imgUrl: "https://lumiere-a.akamaihd.net/v1/images/501st-stormtroopers-main_525e6786.jpeg",
  },
]

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <main className='px-4 justify-items-center'>
      <div className='inset-0 flex flex-wrap gap-6 justify-center w-[1700px] h-[500px]'>
        {thumbs.map(thumbs => (
          <div 
          key={thumbs.name} 
          className='justify-center bg-gray-200 rounded-lg h-[250px] w-[330px] overflow-hidden shadow-md hover:scale-105 transform transition-all duration-300 cursor-pointer'
          onClick={() => handleNavigation(thumbs.path)}>
          <img 
          src={thumbs.imgUrl} 
          alt={thumbs.name}
          className='w-full h-56 object-cover' 
          />
          <h2 className='text-center  text-lg font-semibold text-yellow-800'>{thumbs.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}

