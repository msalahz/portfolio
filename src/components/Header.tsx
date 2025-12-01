import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-4 flex items-center bg-black text-white shadow-lg border-b border-neutral-800">
      <h1 className="ml-4 text-2xl font-semibold">
        <Link to="/">
          MOHAMMED ZAGHLOUL
        </Link>
      </h1>
    </header>
  )
}
