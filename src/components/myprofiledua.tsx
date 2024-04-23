
import { getImageUrlV2 } from "@/util/util";

import React from "react";



export default function MyProfileDua() {
  return (
    <Info/>
  );

function MyAvatar({ person, size }) {
  <img
      className="avatar"
      src={getImageUrlV2(person.imageId, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
}

function Info() {

      <MyAvatar
      person={{ 
        name: 'Lin Lanying', 
        imageId: '1bX5QH6'
      }}
      size={4000}
    />
  
}
}