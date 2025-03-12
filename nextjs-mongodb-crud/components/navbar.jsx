import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"} className="text-white font-bold">GTCoding Example</Link>
      <Link href={"/add-topic"} className="bg-white p-2">Add a Topic</Link>
    </nav> 
  )
}

export default NavBar
