
import Header from "@/components/Global/Header";
import "../styles/globals.css";
import Footer from "@/components/Global/Footer";
import '../styles/font.css';
;

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
