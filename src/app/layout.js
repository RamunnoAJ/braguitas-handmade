import { Montserrat } from 'next/font/google';
import NavBar from '../components/NavBar';
import './globals.css';
import Footer from '../components/footer/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Braguitas Handmade',
  description: 'Braguitas Handmade',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={`text-[#1A002A] ${montserrat.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
