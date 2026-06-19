import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

export const metadata = {
  title: "Someli | 10X Reach, 10X Connections",
  description: "Build influence, expand reach, and grow meaningful connections with Someli.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
