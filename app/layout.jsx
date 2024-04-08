import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Food Website",
  description: "Place for Foodies",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
