import { WithSidebar } from '../../hoc/WithSidebar.hoc.tsx';
import styles from './HomePage.module.scss'


const HomePage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      home 
    </div>
  );
};

export default WithSidebar(HomePage);