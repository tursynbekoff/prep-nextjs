import axios from 'axios'
import useSWR from 'swr'

import Skeleton from 'components/Skeleton'
import Pizzas from 'components/Pizzas'
import { useDispatch } from 'react-redux'
import { onSave } from 'store/pizza-slice'
import { PIZZAS_URL } from 'common/constants'

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
    <div className="flex w-[300px] md:w-[620px] lg:w-[932px] xl:w-[1248px] gap-4 flex-wrap">
      {
        isLoading 
        ? <Skeleton />
        : <Pizzas />
      }
    </div>
  )
}

export default Home
