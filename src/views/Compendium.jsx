import { useState, useEffect } from 'react';
import PokeList from '../components/PokeList.jsx';
import {
    fetchFilteredPokemon,
    fetchPokemon,
    fetchSearchPokemon,
    fetchSortedPokemon,
    fetchTypes,
} from '../services/pokemon'
import pokeball from '../assets/pokeball-logo.png'
import pokeloading from '../assets/pokeloading.gif'
import './Compendium.css'
import Controls from '../components/Controls'

export default function Compendium() {
    const [loading, setLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])
    const [searchName, setSearchName] = useState('')
    const [pokeTypes, setPokeTypes] = useState([])
    const [selectedType, setSelectedType] = useState('')
    const [sort, setSort] = useState('')

    useEffect(() => {
        const getPokemon = async () => {
            const pokeList = await fetchPokemon()
            setPokemons(pokeList)
        }

        async function getTypes() {
            const pokeTypesData = await fetchTypes()
            setPokeTypes(pokeTypesData)
        }
        
        getTypes()
        getPokemon()
    }, [])

    useEffect(() => {
        if (pokemons.length > 0 && pokeTypes.length > 1) {
            setLoading(false)
        }
    }, [pokemons.length, pokeTypes.length])

    useEffect(() => {
        if (!selectedType) return
        setLoading(true)
        setPokemons([])

        async function getFilteredPokemon() {
            if (!selectedType) return

            if (selectedType !== 'all') {
                const filteredPokemon = await fetchFilteredPokemon(selectedType)
                setPokemons(filteredPokemon)
            } else {
                const pokeList = await fetchPokemon()
                setPokemons(pokeList)
            }
            setLoading(false)
            setSort('')
        }

        getFilteredPokemon()
    }, [selectedType])

    useEffect(() => {
        if (!selectedType || selectedType === 'all') return
        setLoading(true)

        async function getSortedPokemon() {
            if (sort) {
                const sortedPokemon = await fetchSortedPokemon({ sort, type: selectedType })
                setPokemons(sortedPokemon)
            } else {
                const filteredPokemon = await fetchFilteredPokemon(selectedType)
                setPokemons(filteredPokemon)
            }
            setLoading(false)
        }

        getSortedPokemon()
    }, [selectedType, sort])

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        fetchSearchPokemon(searchName)
            .then((searchedPokemons) => {
                setPokemons(searchedPokemons)
            })
            .catch((error) => {})
            .finally(() => {
                setLoading(false)
                setSearchName('')
                setSelectedType('')
            })
    }

    return (
        <>
            <div className='title'>
                <img src={pokeball} alt='pokeball' />
                <h1 className='titleText'>Poképendium</h1>
            </div>
            {loading ? (
                <img src={pokeloading} alt='rocking pokeball' />
            ) : (
                // <img src={pokeballOpen} alt='open pokeball' />
                <>
                    {/* <img src={pokeballOpen} alt='open pokeball' /> */}
                    <Controls
                        name={searchName}
                        handleSubmit={handleSubmit}
                        handleNameChange={setSearchName}
                        types={pokeTypes}
                        filterChange={setSelectedType}
                        selectedType={selectedType}
                        sortChange={setSort}
                        selectedSort={sort} 
                    />
                    <PokeList pokemons={pokemons} />
                </>
            )}
        </>
    )
}