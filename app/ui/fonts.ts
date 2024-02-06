import { Inter, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ 
    subsets: ['latin'] 
});

export const playfair = Playfair_Display({
    subsets: ['latin'],
});

export const aspekta = localFont({
    src: [
      {
        path: '../../public/fonts/Aspekta-500.woff2',
        weight: '500',
      },
      {
        path: '../../public/fonts/Aspekta-650.woff2',
        weight: '650',
      },
    ],
    variable: '--font-aspekta',
    display: 'swap',
  })