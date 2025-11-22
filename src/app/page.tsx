import PPCSplash from "@/components/PPCSplash";
import BottomNav from "@/components/BottomNav";

export default function HomePage() {
  return (
    <>
      <PPCSplash />

      <main className="text-white p-10 pb-24"> 
        <h1>Welcome to PawsPalConnect</h1>
        <p>Your content goes here.</p>
      </main>

      <BottomNav />
    </>
  );
}
