import Image from "next/image";
import styles from "./page.module.css";
import { londrinaSolid } from "./_lib/fonts";
import Portrait from "../app/_assets/Portrait.png";

export default function Home() {
  return (
    <main className="relative flex-1">
      <h1
        className={`absolute -z-10 text-[400px] text-zinc-800 -left-20 -top-0 leading-tight ${londrinaSolid.className}`}
      >
        tattoo
      </h1>
      <div className="font-black text-zinc-600 text-8xl pt-56 uppercase">
        <h2>Inspire-se</h2>
        <h2>Expresse-se</h2>
        <h2 className="text-yellow-400">Tatue-se</h2>
      </div>
      <Image
        width={400}
        className="absolute  right-0 -bottom-20 grayscale"
        src={Portrait}
        alt="Foto de Sandro Luz"
      />
    </main>
  );
}
