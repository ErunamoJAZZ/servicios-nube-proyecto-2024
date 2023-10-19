import './globals.css';
import { Providers } from "./providers";
import Navbar from '../components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

// AAAAAAGGGGGGGGGGGGGGGGGGGGGGGGGGGG
// FUCKING CACHE BUGGGGGGGGGGG
export const dynamic = 'force-dynamic';
