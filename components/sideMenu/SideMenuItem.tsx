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
      <li className="px-4 pt-6 sm:pt-8">
        <Link href={href} className="text-xl sm:text-2xl">
          {children}
        </Link>
      </li>
    );
  }

  return (
    <>
      <li className="flex items-center px-4 pt-6 sm:pt-8">
        <Link className="text-xl sm:text-2xl">
          <span className="w-full h-full" onClick={handleExpansion}>
            {children}
            <FontAwesomeIcon
              className={`ml-2 fill-current transition-transform duration-700 ${
                isExpand ? 'rotate-180' : ''
              }`}
              icon={faCaretDown}
            />
          </span>
        </Link>
      </li>
      <li className="pl-7">
        <ul
          className={`${
            isExpand
              ? `mt-3 visible h-${10 * contents.length} sm:h-${
                  9 * contents.length
                }`
              : 'h-0 mt-0 invisible opacity-0'
          } transition-all duration-700`}
        >
          {contents.map(({ title, path }) => (
            <li className="py-1" key={path}>
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
