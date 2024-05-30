import { useEffect, useRef, useState } from 'react'
import { cryptoUrl } from '../../api/url'
import { Spinner } from '../../components/Spinner/Spinner'
import { WithSidebar } from '../../hoc/WithSidebar.hoc'
import { useFetch } from '../../hooks/useFetch'
import styles from './InfiniteScroll.module.scss'
import { useInView } from 'react-intersection-observer'


const List = ( data ) => {
  console.log(data)

  return (
    <ul className={styles.list}>
      {
        data.data.length && data.data.map((item) => (
          <li key={item.id} className={styles.item}>
            <img src={item.image} alt={item.name} style={{ width: '30px' }}/>
            <b>{item.name}</b> 
            <span>{item.current_price}</span>
          </li>
        ))
      }
    </ul>
  )
}

const InfiniteScroll = () => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setLoading ] = useState(false);
  const [ perPage ] = useState(20);
  const [ page, setPage ] = useState(1);


  const { inView, ref } = useInView({
    rootMargin: '200px',
    threshold: 0.5
  });

  async function fetchData(pageNumber: number, pageSize: number) {
    try {
      setLoading(true);
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${pageSize}&page=${pageNumber}&sparkline=false`);
      const data = await response.json();
      setData((prevData) => [...prevData, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(page, perPage);
  }, [])

  useEffect(() => {
    console.log(inView)

    if (inView && !isLoading) {
      setPage((prevPage) => prevPage + 1);
      fetchData(page + 1, perPage);
    }
  }, [inView, isLoading, page, perPage])

  return (
    <section className={styles.container}>
      <List data={data} />
      {data.length && <Spinner ref={ref} />}
    </section>
  )
}

export default WithSidebar(InfiniteScroll);
