//here is layout page
import Header from "@/components/modules/header";
import MobileButton from "@/components/custom/MobileButton";
import Footer from "@/components/modules/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
  <Header />
  <MobileButton />
  {children}
  <Footer />
  </>
  );
}
