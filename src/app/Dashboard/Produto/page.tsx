import Btn from "@/components/Btn";


export default function Produto(){

    const handleClick= ()=> {
        alert("Cliqueii")
    }

    return(
        <>
            <h2>Produto</h2>
            <Btn style="" click={handleClick}>Cadastrar Produto</Btn>
        </>
    );
}
