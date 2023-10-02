import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '../components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Braguitas Handmade',
  description: 'Braguitas Handmade',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={montserrat.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
