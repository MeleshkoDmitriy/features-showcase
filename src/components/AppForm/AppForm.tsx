import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import styles from './AppForm.module.scss'
import { useAddUserMutation } from '../../store/slices/api/formSlice';


interface IFormData extends FieldValues {
  name: string;
  email: string;
  password: string;
}

export const AppForm = () => {

  const [ addUser ] = useAddUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    // setError,
    formState: {
      errors,
      isSubmitting
    },
  } = useForm<IFormData>({
    mode: "onBlur"
  });

  const onSubmit:SubmitHandler<IFormData> = async (data) => {
    console.log(data)
    addUser(data)
    reset();
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <h2>Form</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <input 
            className={styles.input}
            type="text"
            placeholder="name"
            {...register('name', {
              required: "Name field is required",
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters"
              },
            })}
          />
          { errors.name && <div>{errors.name.message}</div> }
          <input 
            className={styles.input}
            type="text"
            placeholder="email"
            {...register('email', {
              required: "Email field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          { errors.email && <div>{errors.email.message}</div> }
          <input 
            className={styles.input}
            type="password"
            placeholder="password"
            {...register('password', {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
            })}
          />
          { errors.password && <div>{errors.password.message}</div> }
          <button
            className={styles.button}
            type='submit'
            disabled={isSubmitting}
          >{isSubmitting ? 'Loading...' : 'Send' }</button>
        </form>
      </section>
    </div>
  )
}
