import './globals.css';

export const metadata = {
  title: 'Brasil Sports Business | Sports, Events & Global Opportunities',
  description: 'Site institucional premium da Brasil Sports Business.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}