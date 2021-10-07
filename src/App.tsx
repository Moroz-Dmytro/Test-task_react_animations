import React, { useMemo } from 'react';
import './App.scss';
import { Header } from './components/Header';

export const App: React.FC = () => {
  const title = useMemo(
    () => React.createRef<HTMLHeadingElement>(),
    [],
  );

  const mouseEffect = (event: React.MouseEvent) => {
    const x = event.pageX / window.innerWidth;
    const y = event.pageY / window.innerHeight;

    if (title.current) {
      title.current.style.transform = `translate(calc(-50% + ${x * 30}px), calc(-50% + ${y * 30}px))`;
    }
  };

  return (
    <div className="App" onMouseMove={mouseEffect}>
      <Header />
      <div className="App__sun"></div>
      <h1 className="App__title" ref={title}>FULL-CYCLE EVENT AGENCY</h1>
      <div className="App__question App__question--where">where?</div>
      <div className="App__question App__question--what">what?</div>
      <div className="App__question App__question--who">who?</div>
    </div>
  );
};
