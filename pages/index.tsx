import axios from 'axios'
import useSWR from 'swr'

import { IPizza } from 'types'
import Card from 'components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { onSave } from 'store/pizza-slice'

interface IProps {
  data: IPizza[]
}

const Home = () => {
  const dispatch = useDispatch()
  const address = `http://localhost:6767/api/pizzas`
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher, {
    onSuccess: (data) => {
      dispatch(onSave(data))
    }
  });

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
