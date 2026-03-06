import "./globals.css";
import Header from "../src/common/header";
import Footer from "../src/common/footer";

export const metadata = {
  title: "Developer Portfolio",
  description: "Personal portfolio website for a web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased font-spartan bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
