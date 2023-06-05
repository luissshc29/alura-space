import React from 'react'
import styles from './Tags.module.scss'

export default function Tags(tags, filtraFotos) {

  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>
          )
        })}
      </ul>
    </div>
  )
}
