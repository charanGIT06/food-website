import Header from "@/components/NavBar";
import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Food Website",
  description: "Place for Foodies",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
