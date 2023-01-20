import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setPizzaState, selectPizzaState } from 'store/slices/pizzaSlice';
import axios from 'axios'
import useSWR from 'swr'

import { IPizza } from 'types'
import Card from 'components/Card'

interface IProps {
  data: IPizza[]
}

const Home = () => {
  const authState = useSelector(selectPizzaState);
  const dispatch = useDispatch();

  const address = `http://localhost:6769/api/pizzas`
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  useEffect(() => {
    dispatch(setPizzaState({
      data
    }))
  
  }, [data, dispatch])
  
  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>


  console.log('authState', authState.data);

  return (
    <>
      {data &&
        data.map((el: IPizza) => <Card key={el.id} card={el}/>)
      }
    </>
  )
}

export default Home
