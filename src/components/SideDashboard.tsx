import Link from "next/link";


const SideDashboard = () =>{
    return(
        <>
            <aside className="flex flex-col p-5 items-center gap-20 bg-slate-800 text-slate-100 ">
                <div className="flex text-xl font-bold">
                    <h1>Logo</h1>
                </div>
               
               <div>
                    <Link href={"/Dashboard"} className="text-sm">Visão Geral</Link>
               </div>
               <div>
                    <Link href={"/Dashboard/Produto"} className="text-sm">Produto</Link>
               </div>
               <div>
                    <Link href={"/Dashboard/Settings"} className="text-sm">Configuração</Link>
               </div>
            </aside>
        </>
    );
};

export default SideDashboard;