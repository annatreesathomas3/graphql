import React from 'react'
import { useCharacter } from '../hooks/useCharacter';
import {Link} from 'react-router-dom'
import './CharcterList.css'

export default function CharacterList() {
    const { error, data, loading } = useCharacter()

    console.log({ error, data, loading });

    if (loading) return <div>spinner..</div>;

    if (error) return <div>something went wrong</div>;


    return <div className="charcterList">
        {data.characters.results.map((character) => {
            return <Link to={`/${character.id}`}>
                <img src={character.image} alt="image" />
                <h2>{character.name}</h2>
            </Link>

        })}
    </div>;

}

