"use server"
import { MouseEventHandler } from "react";


interface BtnProps{
    children: React.ReactNode,
    click: MouseEventHandler<HTMLButtonElement>,
    style: string,
}

export default async function Btn({ children, click, style }: BtnProps){
    return(
        <>
            <button className={style} onClick={click} >{children}</button>
        </>
    );
}