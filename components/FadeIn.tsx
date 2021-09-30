import { useEffect, useState } from 'react';

type Props = {
  overflowY?: 'hidden' | 'scroll' | 'auto';
};

const FadeIn: React.FC<Props> = ({ children, overflowY = 'hidden' }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  return (
    <div className={`overflow-y-${overflowY} w-full h-full scrollbar-hide`}>
      <div
        className={`w-full h-full ${
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
