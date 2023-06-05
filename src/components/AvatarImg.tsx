'use client'
import { Avatar } from "flowbite-react";


interface AvatarImgProps{
    img: string;
}

const AvatarImg = ({ img }: AvatarImgProps)=>{
    return(
        <Avatar 
            placeholderInitials={img}
        />
    );
};

export default AvatarImg;