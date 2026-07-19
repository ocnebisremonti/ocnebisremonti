import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  metadataBase: new URL('https://ocnebisremonti.ge'),
  title: {
    default: 'რემონტი | სარემონტო მომსახურება საქართველოში',
    template: '%s | ოცნების რემონტი',
  },
  description:
    'პროფესიონალური სარემონტო მომსახურება — ბინის, სახლისა და კომერციული ფართის რემონტი მაღალი ხარისხით. შავი და თეთრი კარკასი, კოსმეტიკური რემონტი, ინტერიერის დიზაინი. დაგვირეკეთ უფასო კონსულტაციისთვის.',
  keywords: [
    'რემონტი',
    'რემონტი თბილისში',
    'ბინის რემონტი',
    'სახლის რემონტი',
    'შავი კარკასი',
    'თეთრი კარკასი',
    'კოსმეტიკური რემონტი',
    'ინტერიერის დიზაინი',
    'სარემონტო მომსახურება საქართველოში',
  ],
  authors: [{ name: 'ოცნების რემონტი' }],
  creator: 'ოცნების რემონტი',
  publisher: 'ოცნების რემონტი',

  // Open Graph — Facebook, WhatsApp, LinkedIn-ზე გაზიარებისთვის
  openGraph: {
    type: 'website',
    locale: 'ka_GE',
    url: 'https://ocnebisremonti.ge',
    siteName: 'ოცნების რემონტი',
    title: 'ოცნების რემონტი | სარემონტო მომსახურება საქართველოში',
    description:
      'პროფესიონალური სარემონტო მომსახურება — ბინის, სახლისა და კომერციული ფართის რემონტი მაღალი ხარისხით.',
    images: [
      {
        url: '/og-image.jpg', // 1200x630px რეკომენდებული ზომა
        width: 1200,
        height: 630,
        alt: 'ოცნების რემონტი',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ოცნების რემონტი | სარემონტო მომსახურება საქართველოში',
    description:
      'პროფესიონალური სარემონტო მომსახურება — ბინის, სახლისა და კომერციული ფართის რემონტი მაღალი ხარისხით.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Google Search Console-ის ვერიფიკაციისთვის (მოგვიანებით დაამატებ)
  // verification: {
  //   google: 'შენი-verification-კოდი',
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}