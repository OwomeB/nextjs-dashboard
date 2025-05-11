import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center">
          <p className="text-sm">Got that dog in me</p>
          </footer>
        </body>
    </html>
  );
}
