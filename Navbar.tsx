import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NorthStar from "@/components/NorthStar";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="absolute inset-0 top-0 h-[600px] bg-gradient-to-b from-[#eef6f6] to-transparent -z-10 pointer-events-none" />
      <Navbar />
      <Hero />
      <NorthStar />
    </main>
  );
}