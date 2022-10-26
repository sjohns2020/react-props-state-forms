import React, {useState} from "react";

const FilmForm = ({addFilm}) => {

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    const handleNameChange = function (event) {
        setName(event.target.value)
    }

    const handleUrlChange = function (event) {
        setUrl(event.target.value)
    }

 //   { }
//  callback functions - forms
//  learning how to debug - read error messages - using the dev tools scared me
//  simple react snippets (read what it does)

    const handleFormSubmit = function (event) {
        event.preventDefault()
        const nameToSubmit = name.trim()
        const urlToSubmit = url.trim()
        if (!name || !url) {
            return
        }
        const film = {
            name: nameToSubmit,
            url: urlToSubmit
        }
        addFilm(film)
        setName("")
        setUrl("")
    }

    return ( 
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Film Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} required/>
            <label htmlFor="name">Link to IMDB </label>
            <input type="text" id="url" value={url} onChange={handleUrlChange} required/>
            <input type="submit" value="Post" />

        </form>

     );
}
 
export default FilmForm;