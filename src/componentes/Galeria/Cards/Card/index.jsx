import React from 'react'
import favorito from './favorito.png'
import abrir from './open.png'

export default function Card({item, styles}) {
  return (
      <li className={styles.galeria__card} key={item.id} tag={item.tag}>
          <img
              src={item.imagem}
              alt={item.imagem}
              className={styles.galeria__imagem}
          />
          <p className={styles.galeria__descricao}>{item.titulo}</p>
          <div>
              <p>{item.creditos}</p>
              <span>
                  <img src={favorito} alt="" />
                  <img src={abrir} alt="" />
              </span>
          </div>
      </li>
  )
}
