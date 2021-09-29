import { useEffect, useState } from 'react';

const FadeIn: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  return (
    <div className="overflow-hidden w-full h-full">
      <div
        className={`w-full h-full ${
          show
            ? 'opacity-100 transition duration-700'
            : 'opacity-0 translate-y-6'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export { FadeIn };
