import axios from 'axios'
import useSWR from 'swr'

import { IPizza } from 'types'
import Card from 'components/Card'

interface IProps {
  data: IPizza[]
}

const Home = () => {
  const address = `http://localhost:6767/api/pizzas`
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
    <>
      {data &&
        data.map((el: IPizza) => <Card key={el.id} card={el}/>)
      }
    </>
  )
}

export default Home
