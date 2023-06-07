interface ButtonProps{
    name: string,
    style: string,
    types?: "button" | "submit" | "reset" ;
    click?: ()=>{},
}


const Button = ({ name, style, types, click }: ButtonProps) => {
    return(
        <>
            <button className={style} type={types} onClick={click}>{name}</button>
        </>
    );
}

export default Button;