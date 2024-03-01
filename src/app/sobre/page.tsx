import Link from "next/link";
export default function sobre (){
    return(
<>
<h1>Sobre</h1>  
<p>Tela sobre meu projeto </p>
<Link href={"/"}> HOME </Link>
</>
    );
}