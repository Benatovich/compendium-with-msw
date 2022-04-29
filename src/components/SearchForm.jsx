export default function SearchForm({ name, handleSubmit, handleNameChange }) {
    return (
        <form aria-label='searchForm' onSubmit={handleSubmit} style={{ textAlign: 'center '}}>
            <label htmlFor='pokename'>Name:</label>
            <input
                id='pokename'
                name='search'
                type='text'
                aria-label='searchFormInput'
                onChange={(e) => handleNameChange(e.target.value)}
                value={name}
            />
            <button type='submit'>PokéSearch!</button>
        </form>
    )
}