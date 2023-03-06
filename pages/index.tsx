import React from 'react'
import axios from 'axios'
import useSWR from 'swr'

import Skeleton from 'components/Skeleton'
import Pizzas from 'components/Pizzas'
import { useDispatch } from 'react-redux'
import { onSave } from 'store/pizza-slice'
import { PIZZAS_URL } from 'common/constants'
import Navbar from 'components/Navbar'

const Home = () => {
  const dispatch = useDispatch()
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
  
  const { error, isLoading  } = useSWR(PIZZAS_URL, fetcher, {
    onSuccess: (data) => {
      dispatch(onSave(data))
    }
  });


  if (error) <p>Loading failed...</p>;

  return (
    <div className="p-5 flex flex-col gap-5">
      <Navbar />
      <>
        {
          isLoading 
          ? <Skeleton />
          : <Pizzas />
        }
      </>
    </div>
  )
}

export default Home
