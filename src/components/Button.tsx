import DashboardPage from "@/app/Dashboard/page";
import Link from "next/link";

interface ButtonProps{
    name: string,
    style: string,
    referance: string
}


const Button = ({ name, style, referance }: ButtonProps) => {
    return(
        <>
            <Link href={referance} className={style}>{name}</Link>
        </>
    );
}

export default Button;