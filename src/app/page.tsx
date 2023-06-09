import Link from "next/link";

export default function appPage(){
    return(
        <main className="flex flex-1 h-screen justify-center items-center ">
            <Link  className="border p-3 rounded hover:bg-slate-100 hover:text-slate-800 transition-all delay-100" href="/Dashboard">Entrar</Link>
        </main>
    );
}