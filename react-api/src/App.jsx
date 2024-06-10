import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PokeList from "./components/PokeList";
import PokeDetail from "./components/PokeDetail";

function App() {
  const [pokemonList, setPokemonList] = useState([])

  // Mendefinisikan state baru
  const [selectedPokemonName, setSelectedPokemonName] = useState('')

  // Mendefinisikan state baru untuk menyimpan detail Pokemon
  const [pokemonDetail, setPokemonDetail] = useState()

  useEffect(() => {
    // Api Limit 10
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then((res) => res.json())
    .then((data) => setPokemonList(data.results))
    .catch((err) => console.log(err))
  }, [])

  // Mendapatkan detail pokemon setiap kali state selectedPokemonName berubah
  useEffect(() => {
    if (!selectedPokemonName) return
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)
    .then((res) => res.json())
    .then((data) => setPokemonDetail(data))
    .catch((err) => console.log(err))
  }, [selectedPokemonName])

  // Mendefinisikan function untuk menghilangkan pokemon yang dipilih
  const clear = () => {
    setSelectedPokemonName('')
    setPokemonDetail()
  }

  return (
    <div style={styles.container}>
      <h2>PokeAPI</h2>
      {/* Memasukkan setSelectedPokemonName function sebagai prop */}
      <PokeList 
      pokemonList={pokemonList} 
      setSelectedPokemonName={setSelectedPokemonName}
      />
       {/* Menampilan detail Pokemon jika ada*/}
       {pokemonDetail && (
        <div>
          <h2>Pokemon Detail</h2>
          <PokeDetail pokemonDetail={pokemonDetail} />
          <button style={styles.button} onClick={() => clear()}>Clear</button>
        </div>
       )}


      {/* Menampilkan nama pokemon yang dipilih */}
      {/* <p>{selectedPokemonName}</p> */}

      {/* Menampilkan detail pokeon jika ada */}
      {/* {pokemonDetail && <p>{pokemonDetail.name}</p>} */}
    </div>
  )
}

const styles = {
  container: {
    width: '50%',
    margin: '0 auto',
    padding: '80px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderRadius: "6px",
    padding: "12px 24px",
    fontSize: "1em",
    cursor: "pointer",
    marginTop: "32px",
  },
}

export default App