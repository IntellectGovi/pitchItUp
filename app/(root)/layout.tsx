import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
      <h1 className="text-center p-2">Made by Govind❤️</h1>
    </main>
  );
}
