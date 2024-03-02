import Image from "next/image";
import Profile from "../components/profile";


export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style = {{ textAlign: 'center' }}>
         <h1> Ilmuwan yang luar biasa</h1>
      </div>

      <div className="flex w-full justify-center">
        <Profile />
        <Profile />
        <Profile />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
      </div>
    </main>
    </>
    
  );
}
