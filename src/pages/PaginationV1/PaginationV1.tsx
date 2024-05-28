import { FC, useEffect, useState } from 'react';
import { WithSidebar } from '../../hoc/WithSidebar.hoc';
import styles from './PaginationV1.module.scss'
import { cryptoData } from '../../api/url';
import { useQuery } from 'react-query';

async function fetchData () {
  const response = await fetch(cryptoData);
  const data = response.json();
  return data;
}

const PaginationV1:FC = () => {

  const { data, isLoading, error } = useQuery('crypto', fetchData);

  const [ crypto, setCrypto ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ itemsPerPage ] = useState(10);

  useEffect(() => {
    setCrypto(data?.data);
  }, [data])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  if (!data) {
    return <div>No data!</div>;
  }
  // list
  const lastCryptoIndex = itemsPerPage * currentPage;
  const firstCryptoIndex = lastCryptoIndex - itemsPerPage;
  const currentCrypto = crypto.slice(firstCryptoIndex, lastCryptoIndex);

  // pagination
  const pageCount = [];
  for (let i = 0; i <= Math.ceil(crypto.length / itemsPerPage); i++) {
    pageCount.push(i + 1);
  }

  //pagination function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.wrapper}>
      <h2>Pagination with React-Query</h2>
      <ul className={styles.listCrypto}>
        {
          crypto?.length && currentCrypto.map((d) => {
            return <li key={d.id}><b>{d.name}</b><sup>{d.symbol} </sup><span>price USD: {d.priceUsd}</span></li>
          })
        }
      </ul>
      <div className={styles.pagination}>
        <div className={styles.listNumbers}>
          <button onClick={() => setCurrentPage(prev => prev - 1)}>
            Prev
          </button>
          {
            pageCount.map((number, i) => {
              return <div key={i} 
                          className={number === currentPage ? `${styles.active} ${styles.number}` : `${styles.number}`}
                          onClick={() => paginate(number)}>
                        {number}
                      </div>
            })
          }
          <button onClick={() => setCurrentPage(prev => prev + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default WithSidebar(PaginationV1);