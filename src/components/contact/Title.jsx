export default function Title({ title }) {
  return (
    <div className='border-[#530586] py-3 border-4 md:py-5 w-full max-w-[330px] md:max-w-[470px]'>
      <h1 className='text-2xl md:text-4xl text-center uppercase text-[#530586] font-bold'>
        {title}
      </h1>
    </div>
  );
}
