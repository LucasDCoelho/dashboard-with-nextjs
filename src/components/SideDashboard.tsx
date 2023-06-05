import Link from "next/link";
import AvatarImg from "./AvatarImg";

const SideDashboard = () =>{
    return(
        <>
            <aside className="flex flex-col gap-10 w-1/4 h-screen p-5 bg-slate-100 text-slate-800 ">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <AvatarImg img="B"/>
                </div>
               
               <div>
                    <Link href={"/Produtos"} className="text-xl">Post</Link>
               </div>
            </aside>
        </>
    );
};

export default SideDashboard;