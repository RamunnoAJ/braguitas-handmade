import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Button from '../../components/buttons/Button';
import LoginInput from '../../components/login/LoginInput';

export default function Login() {
  return (
    <main className='flex flex-col items-center justify-center max-w-lg mx-auto w-11/12 my-12'>
      <h1 className='uppercase text-xl font-bold'>Ingresa a tu cuenta</h1>
      <Button cx='bg-[#E8D0EF] hover:bg-[#AA58C6] my-4 w-full'>
        <span className='mr-4'>Iniciar sesión con google</span>
        <FontAwesomeIcon icon={faGoogle} />
      </Button>
      <div className='flex items-center justify-between gap-2 w-full'>
        <div className='my-4 md:my-8 h-[4px] w-36 md:w-48 bg-[#530586] rounded-full'></div>
        <span className='font-semibold text-[#530586]'>O</span>
        <div className='my-4 md:my-8 h-[4px] w-36 md:w-48 bg-[#530586] rounded-full'></div>
      </div>

      <form className='flex flex-col gap-4 md:gap-8 w-full'>
        <LoginInput
          type={'text'}
          placeholder='Ingresa tu correo electrónico'
          id='email'
          label='Correo Electrónico'
          isPassword={false}
        />
        <LoginInput
          type={'password'}
          placeholder='Ingresa tu contraseña'
          id='password'
          label='Contraseña'
          isPassword={true}
        />

        <div className='flex flex-col items-center text-xs'>
          <p>¿Has olvidado tu contraseña?</p>
          <p>
            ¿No tienes una cuenta? <Link href='/register'>Registrate aquí</Link>
          </p>
        </div>

        <Button cx='bg-[#530586] text-white hover:bg-[#1A002A] max-w-[13rem] self-center text-sm w-full'>
          Iniciar sesión
        </Button>
      </form>
    </main>
  );
}
