import axios from 'axios'
import useSWR from 'swr'

import { IPizza } from 'types'
import Skeleton from 'components/Skeleton'
import Card from 'components/Card'

const Home = () => {
  const address = `http://localhost:6767/api/pizzas`
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
  
  const { data, error, isLoading  } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;

  return (
    <div className="flex w-[300px] md:w-[620px] gap-4 flex-wrap">
      {
        isLoading 
        ? <Skeleton />
        : (data &&
          data.map((el: IPizza) => <Card key={el.id} card={el}/>)
        )
      }
    </div>
  )
}

export default Home
