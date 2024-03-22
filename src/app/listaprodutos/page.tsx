import Link from "next/link";

import produtos from '../produtos';

export default function ListaProdutos() {

return(

<>

<h1>Produtos</h1>

<ol>
  {
    produtos.map(
      (prod) => 
      <Link href = {`/listaprodutos/${prod.id}`} key={prod.id}>
        <li> {prod.nome} </li>
      </Link>
    )
  }
</ol>
<Link href={"/"}>Home</Link> 

</>

);

}