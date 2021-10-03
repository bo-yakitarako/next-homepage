import { useEffect, useState } from 'react';

type Props = {
  fixed?: boolean;
};

const FadeIn: React.FC<Props> = ({ children, fixed }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  return (
    <div className="overflow-hidden w-full h-full">
      <div
        className={`w-full h-full ${fixed ? 'fixed' : ''} ${
          show
            ? 'opacity-100 transition duration-1000'
            : 'opacity-0 translate-y-6'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export { FadeIn };
