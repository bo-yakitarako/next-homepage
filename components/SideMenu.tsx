const SideMenu: React.FC = () => {
  return (
    <nav className="w-60 bg-transparent">
      <ul className="overflow-y-scroll w-full max-h-screen list-none">
        <li className="p-2 text-lg hover:cursor-pointer">About</li>
      </ul>
    </nav>
  );
};

export { SideMenu };
