import React, { useState } from 'react';
import Animais from './screens/animais';
import Favoritos from './screens/favoritos';

export default function App() {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  // 'animais' será a tela inicial do seu app
  const [telaAtual, setTelaAtual] = useState('animais'); 

  const lidarComFavoritar = (animal) => {
    const jaExiste = listaFavoritos.some(item => item.id === animal.id);
    if (jaExiste) {
      setListaFavoritos(listaFavoritos.filter(item => item.id !== animal.id));
    } else {
      setListaFavoritos([...listaFavoritos, animal]);
    }
  };

  // Renderiza a tela dependendo do estado atual, passando a função de navegar
  if (telaAtual === 'favoritos') {
    return (
      <Favoritos 
        listaFavoritos={listaFavoritos} 
        irParaAnimais={() => setTelaAtual('animais')} 
      />
    );
  }

  return (
    <Animais 
      listaFavoritos={listaFavoritos} 
      onFavoritar={lidarComFavoritar} 
      irParaFavoritos={() => setTelaAtual('favoritos')} 
    />
  );
}