import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Phonebook demo',
  description: 'Frontend for phonebook demo',
}

const RootLayout = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;

