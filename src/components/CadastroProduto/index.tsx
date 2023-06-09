import Link from "next/link";

export default function Produto(){
    return(
        <>
            <section className="flex-1 flex justify-center items-center fixed border  w-screen h-screen">
                <div className="border absolute bg-slate-900 flex-1 flex z-10 h-96 w-96 items-start justify-between ">
                    <div className="border">
                        
                    </div>
                    <Link  className="flex items-center justify-center border px-2 rounded-full hover:bg-slate-100 hover:text-slate-800 transition-all delay-100" href="/Dashboard/Produto">X</Link>
                </div>
            </section>
        </>
    );
}
