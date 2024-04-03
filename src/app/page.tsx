// import Bio from "@/components/bio";
import { Gallery } from "@/components/gallery";
import MyGallery from "@/components/mygallery";
import Todolist from "@/components/todolist";

export default function Home() {
  return (

    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">
        Ilmuwan yang luar biasa
      </h1>
      <Gallery />
      <hr />
      <Todolist />
      <MyGallery />
    </section>
    
  );
}
