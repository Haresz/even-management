// app/fonts.ts
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-popins',
  weight: '400',
});

export const fonts = {
  poppins,
};
