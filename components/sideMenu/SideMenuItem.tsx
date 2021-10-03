import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { Link } from '../Link';

export type Page = {
  title: string;
  path: string;
};

type Props = {
  href?: string;
  contents?: Page[];
};

const SideMenuItem: React.FC<Props> = ({ href, children, contents = [] }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpansion = useCallback(() => {
    setIsExpand((prev) => !prev);
  }, []);

  if (typeof href !== 'undefined') {
    return (
      <li className="px-4 pt-8">
        <Link href={href} className="text-2xl">
          {children}
        </Link>
      </li>
    );
  }

  return (
    <>
      <li className="flex items-center px-4 pt-8">
        <span
          className="text-2xl hover:cursor-pointer"
          onClick={handleExpansion}
        >
          {children}
          <FontAwesomeIcon className="ml-2 fill-current" icon={faCaretDown} />
        </span>
      </li>
      <li
        className={`${
          isExpand
            ? `mt-1 h-${10 * contents.length} opacity-100 visible`
            : 'mt-0 h-0 opacity-0'
        } transition-all duration-700`}
      >
        <ul className="pl-7">
          {contents.map(({ title, path }) => (
            <li className="mt-2" key={path}>
              <Link className="text-base" href={path}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export { SideMenuItem };
