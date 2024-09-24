import Footer from "@/components/general/footer/Footer";
import Header from "@/components/general/header/Header";

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
