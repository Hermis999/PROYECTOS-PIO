import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import Modal from '../components/Modal';
import '../assets/css/Products.css';


const Products = () => {
  const [pokemons, setPokemons] = useState([]); // Renombrado para mayor claridad
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Estado para el Pokémon seleccionado
  const [showModal, setShowModal] = useState(false); // Estado para el modal

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=99'); // Trae los primeros 12 Pokémon
      const results = response.data.results;

      // Obtener los datos detallados de cada Pokémon
      const detailedPokemons = await Promise.all(
        results.map(async (pokemon) => {
          const details = await axios.get(pokemon.url); // Solicitud a cada URL
          return {
            id: details.data.id,
            name: details.data.name,
            height: details.data.height, // Altura del Pokémon
            image: details.data.sprites.front_default, // Imagen del Pokémon
            base_experience: details.data.base_experience, // Experiencia base
            types: details.data.types.map((type) => type.type.name),
            abilities: details.data.abilities.map((ability) => ability.ability.name),
          };
        })
      );

      setPokemons(detailedPokemons);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  // Maneja la apertura del modal
  const handleShowModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  // Maneja el cierre del modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPokemon(null);
  };

  return (
    <div className="containerall">
      <div className="row">
        {pokemons.map((pokemon) => (
          <div className="col-md-4 mb-4" key={pokemon.id}>
            <ProductCard product={pokemon} onView={() => handleShowModal(pokemon)} />
          </div>
        ))}

        {/* Modal para mostrar los detalles */}
        {selectedPokemon && (
          <Modal
            show={showModal}
            onClose={handleCloseModal}
            title={selectedPokemon.name}
            image={selectedPokemon.image}
            id={selectedPokemon.id}
            height={selectedPokemon.height}
            exp={selectedPokemon.base_experience}
            types={selectedPokemon.types}
            abilities={selectedPokemon.abilities}
          >
            <p>Experiencia base: {selectedPokemon.base_experience}</p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Products;
