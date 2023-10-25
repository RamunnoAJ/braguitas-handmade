import RegisterInput from '../../components/RegisterInput';
import Button from '../../components/buttons/Button';

const Register = () => (
  <div className='grid justify-center items-center h-fit md:my-28 my-10 '>
    <h1 className='w-full h-10 grid justify-center items-center font-bold text-2xl '>
      REGISTRATE
    </h1>
    <RegisterInput
      id='name'
      placeholder='Ingresa tu nombre y apellido'
      type='text'
      textLabel='Nombre y Apellido'
    />
    <RegisterInput
      id='city'
      placeholder='Indica de que ciudad eres'
      type='text'
      textLabel='Ciudad'
    />
    <RegisterInput
      id='address'
      placeholder='Ingresa tu dirección'
      type='text'
      textLabel='Dirección'
    />
    <RegisterInput
      id='phone'
      placeholder='Ingresa tu número de teléfono'
      type='numberp'
      textLabel='Teléfono'
    />
    <RegisterInput
      id='email'
      placeholder='ejemplo@gmail.com'
      type='email'
      textLabel='Correo Electrónico'
    />
    <RegisterInput
      id='password'
      placeholder='Debe tener más de 6 dígitos'
      type='password'
      textLabel='Contraseña'
    />
    <div className='flex justify-center mt-8'>
      <Button cx='bg-[#530586] text-white w-[211px] '>CREAR CUENTA</Button>
    </div>
  </div>
);

export default Register;
