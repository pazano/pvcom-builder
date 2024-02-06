import '@/app/ui/global.css'

import { inter, playfair, aspekta } from '@/app/ui/fonts';

import Header from '@/app/ui/header';

import SideNavigation from '@/app/ui/side-navigation';
import ThemeProvider from '@/app/ui/theme-provider';
import Footer from '@/app/ui/footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${aspekta.variable} font-inter antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-7xl mx-auto">
            <div className="min-h-screen flex">
              <SideNavigation />

              { /* Main content */}
              <main className="grow overflow-hidden px-6">
                <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
                  <Header />
                  {children}
                  <Footer />
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
