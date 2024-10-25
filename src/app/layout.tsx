import "./styles/header.css";
import "./styles/global.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body >
        {children}
      </body>
    
    </html>
  );
}
