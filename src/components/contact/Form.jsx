import Button from '../buttons/Button';
import Field from './Field';

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className='w-full flex flex-col gap-4 items-center max-w-[330px] md:max-w-7xl'
      onSubmit={handleSubmit}>
      <h2 className='text-lg font-bold text-center uppercase mb-4'>
        Si tenes alguna pregunta, <br /> ¡No dudes en escribirnos!
      </h2>
      <Field
        id='name'
        type='text'
        placeholder='Tu nombre y apellido'
        isTextarea={false}
      />
      <Field
        id='phone'
        type='text'
        placeholder='Tu número de télefono'
        isTextarea={false}
      />
      <Field id='subject' type='text' placeholder='Asunto' isTextarea={false} />
      <Field id='message' placeholder='Mensaje' isTextarea={true} />
      <Button cx='bg-[#530586] text-white max-w-[120px] w-full hover:bg-[#1A002A] h-[40px] flex items-center justify-center'>
        Enviar
      </Button>
    </form>
  );
}
