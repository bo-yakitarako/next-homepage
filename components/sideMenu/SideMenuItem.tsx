const SideMenuItem: React.FC = ({ children }) => {
  return (
    <li className="px-4 pt-8">
      <span className="inline-block relative after:absolute after:-bottom-0.5 after:left-0 mb-1 after:w-full after:h-px text-2xl no-underline after:bg-gray-50 after:transition-transform after:duration-300 after:origin-top-left hover:after:scale-100 after:scale-y-100 after:scale-x-0 hover:cursor-pointer">
        {children}
      </span>
    </li>
  );
};

export { SideMenuItem };
