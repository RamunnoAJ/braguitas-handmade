import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Button from '../../components/buttons/Button';

export default function Login() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='uppercase text-xl font-bold'>Ingresa a tu cuenta</h1>
      <Button>
        Iniciar sesión con google
        <FontAwesomeIcon icon={faGoogle} />
      </Button>
    </main>
  );
}
