import React from 'react'
import { IPizza } from 'types'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'

interface Pizza {
  pizza: {
    list: IPizza[]
  }
}
const Pizza = () => {
  const { pizza: { list } } : Pizza | any = useSelector((s) => s)

  return (
    <>
      {
        ((Array.isArray(list)) &&
        list.map((el: IPizza) => {
          return <Card key={el.id} card={el}/>
        })
        )
      }
    </>
  )
}

export default Pizza