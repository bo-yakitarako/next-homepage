import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkRaw from 'next/link';

type Props = {
  href?: string;
  className?: string;
  external?: boolean;
};

const style = (className?: string) =>
  `${
    className ?? 'text-2xl'
  } inline-block relative after:absolute after:-bottom-0.5 after:left-0 mb-1 after:w-full after:h-px no-underline after:bg-gray-50 after:transition-transform after:duration-300 after:origin-top-left hover:after:scale-100 after:scale-y-100 after:scale-x-0 hover:cursor-pointer`;

const Link: React.FC<Props> = ({ href, className, external, children }) => {
  if (typeof href === 'undefined') {
    return <span className={style(className)}>{children}</span>;
  }
  if (external) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={style(className)}
      >
        {children}{' '}
        <FontAwesomeIcon
          className="font-normal fill-current"
          icon={faExternalLinkAlt}
        />
      </a>
    );
  }
  return (
    <LinkRaw href={href} passHref>
      <span className={style(className)}>{children}</span>
    </LinkRaw>
  );
};

export { Link };
