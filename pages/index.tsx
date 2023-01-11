import axios from 'axios'
import { IPizza } from 'types'
import Card from 'components/Card'

interface IProps {
  data: IPizza[]
}

const Home = ({ data }: IProps | any) => {
  return (
    <>
      {
        data.map((el: IPizza) => <Card key={el.id} card={el}/>)
      }
    </>
  )
}

export const getServerSideProps = async () => {

  const response = await axios.get(`http://localhost:6767/api/pizzas`)
  return {
    props: {
      data: response.data,
    }
  }
}

export default Home
