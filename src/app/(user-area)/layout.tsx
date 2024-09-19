import { HeaderMenu } from "@/components/HeaderMenu";
import { Footer } from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="w-full h-full flex flex-col justify-start items-center">
        <HeaderMenu />
        {children}
        <Footer />
      </main>
    </>
  );
}
