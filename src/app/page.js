import NavBar from '../components/NavBar';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className='flex flex-col items-center justify-between p-24 gap-4'>
        <h1 className='text-5xl font-bold'>Braguitas Handmade</h1>
        <p className='text-2xl font-medium'>Braguitas hechas con amor</p>
      </div>
      <Footer />
    </main>
  );
}
