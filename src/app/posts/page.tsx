import Link from "next/link"

const FirstPost = () =>{
    return(
        <>
            <h1>First Post</h1>
            <Link href={"/"}>Back to Home</Link>
        </>
    );
};

export default FirstPost;