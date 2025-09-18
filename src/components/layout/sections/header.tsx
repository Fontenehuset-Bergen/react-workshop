export function Header() {
  return (
    <header className="flex justify-between py-2 px-4 bg-gradient-to-br from-orange-500 to-purple-600">
      <span>
        <img src="/vite.svg" alt="vite logo" />
      </span>
      <nav className="flex gap-2">
        <a href="/" className="!text-white hover:!text-sky-100 hover:!underline duration-200">Hjem</a>
      </nav>
    </header>
  );
}
