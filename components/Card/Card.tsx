import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { IPizza } from 'types'
import styles from './card.module.css'

interface IProp {
  card: IPizza;
}

const Card: NextPage<IProp> = ({ card }) => {
  const {imageUrl, size, raiting, types, title, description, price} = card

  console.log(imageUrl)
  return (
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
        <Image 
          src={`${imageUrl}`}
          width={300}
          height={300}
          className=""
          alt="pizza product"
        />
      </div>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <div className={styles.card__purchase}>
        <div className={styles.card__price}>
          {`from ${price} $`}
        </div>
        <button
          type='button'
          onClick={()=> {}}
        >
          Choose
        </button>
      </div>
    </div>
  )
}

export default Card