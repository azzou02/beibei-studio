import type { Metadata } from "next";
import "@/styles/globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "beibei studio",
  description: "Journal of fashion, art, tech & sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased mx-auto px-8">
        
        {/* -- Nav Bar -- */}
        <header className="flex justify-between gap-8 mt-2 pt-8 px-8">
          <div className="text-xl italic lowercase leading-7">
            beibei<br />studio
          </div>

          <nav className="flex space-x-20 text-lg italic lowercase">
            {['home', 'fashion', 'art', 'tech', 'sports'].map((section) => (
              <Link
                key={section}
                href={section === 'home' ? '/' : `/${section}`}
                className="hover:underline"
              >
                {section}
              </Link>
            ))}
          </nav>
        </header>

        {/* -- Page Content -- */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
