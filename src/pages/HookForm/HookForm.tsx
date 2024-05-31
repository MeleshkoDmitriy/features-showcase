import { AppForm } from '../../components/AppForm/AppForm'
import { WithSidebar } from '../../hoc/WithSidebar.hoc';
import { useGetAllUsersQuery } from '../../store/slices/api/formSlice';
import styles from './HookForm.module.scss'


const HookForm = () => {

  const { data, isLoading } = useGetAllUsersQuery();

  return (
    <div className={styles.wrapper}>
      <AppForm />
      <section className={styles.list}>
        { isLoading && <div>Loading...</div> }
        {
          data?.map((user) => (
            <div className={styles.user} key={user.id}>
              <span>{user.id}<b>   {user.name}</b></span>
              <span>{user.email}</span>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default WithSidebar(HookForm);