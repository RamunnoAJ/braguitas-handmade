import { Montserrat } from 'next/font/google';
import NavBar from '../components/NavBar';
import './globals.css';
import SearchBar from '../components/SearchBar';
import Footer from '../components/footer/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Braguitas Handmade',
  description: 'Braguitas Handmade',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={montserrat.className}>
        <NavBar />
        {children}
        <SearchBar />
        <Footer />
      </body>
    </html>
  );
}
