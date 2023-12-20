import { Montserrat } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/footer/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Braguitas Handmade',
  description: 'Braguitas Handmade',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/icon.png' />
      </Head>
      <html lang='es'>
        <body className={`text-[#1A002A] ${montserrat.className}`}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
