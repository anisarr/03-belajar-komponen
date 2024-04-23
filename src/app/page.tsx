// import Bio from "@/components/bio";
import { Gallery } from "@/components/gallery";
import MyGallery from "@/components/mygallery";
import MyAvatar from "@/components/myprofiledua";
import MyProfile from "@/components/myprofiledua";
import MyProfileV2 from "@/components/myprofilev2";
import Profile from "@/components/profile";
import Todolist from "@/components/todolist";
import MyProfileDua from "@/components/myprofiledua";
// import MyProfileDua from "@/components/myprofiledua";

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
      <MyProfileDua />
      <MyProfileV2/>

    </section>
    
  );
}
