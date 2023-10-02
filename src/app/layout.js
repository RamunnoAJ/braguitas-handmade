import { Montserrat } from 'next/font/google';
import NavBar from '../components/navBar/NavBar';
import './globals.css';

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
      </body>
    </html>
  );
}
