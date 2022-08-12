import React from 'react'
import './Character.css'
import { useCharacterr } from '../hooks/useCharacterr';
import { useParams } from 'react-router';

export default function Character() {
  
  const { id } = useParams()
  const { data, loading, error } = useCharacterr(id)


  if (loading) return <div>spinner..</div>;

  if (error) return <div>something went wrong</div>;

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} />
      <div className="Character-content">
        <h2>{data.character.name}</h2>
        <p>{data.character.gender}</p>
        <div className='Character-episode'>
          {data.character.episode.map(episode => {
            return <div>
              {episode.name}-<b>{episode.episode}</b>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
