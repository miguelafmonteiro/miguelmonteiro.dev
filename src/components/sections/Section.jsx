import { useRef, useEffect } from 'react';
import { context } from '../ContextProvider';

const Section = ({nameStyle, matrixFontColor, children}) => {
  const { setNameStyle, setMatrixFontColor } = context();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNameStyle(nameStyle);
        setMatrixFontColor(matrixFontColor);
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  });

  return (
  <div ref={sectionRef} className="mt-20">
        {children}
    </div> 
  );
};

export default Section;