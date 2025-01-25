import Link from "next/link";

export default function NavLayout() {
    return (
        <header>
            <nav>
                <h1>The Planets</h1>
                <ul>
                   <li>
                      <Link href="/mercury">Mercury</Link>
                   </li>
                   <li>
                      <Link href="/venus">Venus</Link>
                   </li><li>
                      <Link href="/earth">Earth</Link>
                   </li><li>
                      <Link href="/mars">Mars</Link>
                   </li><li>
                      <Link href="/jupiter">Jupiter</Link>
                   </li><li>
                      <Link href="/saturn">Saturn</Link>
                   </li><li>
                      <Link href="/uranus">Uranus</Link>
                   </li><li>
                      <Link href="/neptune">Neptune</Link>
                   </li>
                </ul>
            </nav>
        </header>
    )
 }