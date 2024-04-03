// // import {  } from '../util/utils/getimageurl';
// import { getImageUrl } from "@/util/util";

import { getImageUrl } from '@/util/util';
import MyProfile from './myprofile';

// function MyAvatar({ person, size }){
//   return(
//     <img
//       className="avatar"
//       src={getImageUrl(person, 'b')}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export function MyProfile() {
//   return(
//     <MyAvatar
//       size={100}
//       person={{ 
//         name:'Greforio yield. Zara',
//         imageId: '7vQD0fP'
//        }}
//     />
// );
// }

// export default function MyGallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           // className="avatar"
//           // src={getImageUrl('szV5sdG')}
//           // alt="Maria Skłodowska-Curie"
//           // width={70}
//           // height={70}
//           <MyProfile 
//             person={{ 
//               name: "Maria Skłodowska-Curie",
//               imageId: 'szV5sdG'
//              }}
//             size = {70}
//           />
//         />
//         <ul>
//           <li>
//             <b>Profesi: </b> 
//             Fisikawan dan kimiawan
//           </li>
//           <li>
//             <b>Penghargaan: 4 </b> 
//             (Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci)
//           </li>
//           <li>
//             <b>Telah Menemukan: </b>
//             polonium (unsur kimia)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('YfeOqp2')}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profesi: </b> 
//             Ahli Geokimia
//           </li>
//           <li>
//             <b>Penghargaan: 2 </b> 
//             (Penghargaan Miyake Geokimia, Penghargaan Tanaka)
//           </li>
//           <li>
//             <b>Telah Menemukan: </b>
//             sebuah metode untuk mengukur karbon dioksida pada air laut
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }


// import { getImageUrl } from '@/util/util';
export default function MyGallery() {
  return (
    <div>
      <br />
      <br />
      <h1>Notable Scientist</h1>
      
      <MyProfile 
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="Fisikawan dan kimiawan"
        awards={['Penghargaan Nobel Fisika', 'Penghargaan Nobel Kimia', 'Medali Davy', 'Medali Matteucci']}
        discovery="polonium (unsur kimia)"
      />
      <MyProfile 
       name="Katsuko Saruhashi"
       imageId="YfeOqp2"
       profession="Ahli Geokimia"
       awards={['Penghargaan Miyake Geokimia', 'Penghargaan Tanaka']}
       discovery="sebuah metode untuk mengukur karbon dioksida pada air laut"
      />
      
    </div>
  );
}