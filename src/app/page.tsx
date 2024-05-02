import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    
    <main >
        <p>
          hola mundo
        </p>
        
    <Link href="/users">Ver usuarios</Link>
      
    </main>
  );
}
