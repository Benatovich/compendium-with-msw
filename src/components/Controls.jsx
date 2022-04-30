import React from 'react'
import SearchForm from './SearchForm'
import './Controls.css'

export default function Controls({
    name, handleSubmit,
    handleNameChange,
}) {
    return (
        <div className='controlsContainer'>
            <SearchForm name={name} handleSubmit={handleSubmit} handleNameChange={handleNameChange} />
        </div>
    )
}