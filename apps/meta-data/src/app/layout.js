import "./globals.css";


//this object can be added in the layout or in the page or in the nested layout
export const metadata = {
  title: "Discover Your Passion",
  description: "This is motivational Blog",
  keywords: 'Passion, objective, Goal',
  authors: [{ name: 'IBM' }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
