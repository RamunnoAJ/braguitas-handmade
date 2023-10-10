export default function Field({ id, type, placeholder, isTextarea }) {
  return isTextarea ? (
    <textarea
      id={id}
      placeholder={placeholder}
      className='bg-[#E8D0EF] max-w-[330px] w-full md:max-w-[660px] py-2 px-4 md:py-4 placeholder:text-gray-600 font-semibold resize-none h-36 focus-visible:outline-[#530586] rounded'
    />
  ) : (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className='bg-[#E8D0EF] max-w-[330px] w-full md:max-w-[660px] py-2 px-4 md:py-4 placeholder:text-gray-600 font-semibold focus-visible:outline-[#530586] rounded'
    />
  );
}
