import Button from "@/components/Button";

export default function appPage(){
    return(
        <main className="flex flex-1 h-screen justify-center items-center ">
            <Button name="Entrar" style="border p-3 rounded hover:bg-slate-100 hover:text-slate-800 transition-all delay-100" referance="/Dashboard"/>
        </main>
    );
}