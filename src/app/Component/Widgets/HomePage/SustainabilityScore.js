import React, { useEffect, useRef } from 'react';
import SustomSelectDropdown from "../SustomSelectDropdown";

export default function SustainabilityScore() {
  const containerRef = useRef(null);
  const containerLineRef1 = useRef(null);
  const containerLineRef2 = useRef(null);

  const semiCircleBar = useRef(null);
  const lineBar1 = useRef(null);
  const lineBar2 = useRef(null);

  useEffect(() => {
    import('progressbar.js').then((ProgressBar) => {
      if (!ProgressBar || !containerRef.current) return;

      semiCircleBar.current = new ProgressBar.SemiCircle(containerRef.current, {
        strokeWidth: 4,
        color: '#27A376',
        trailColor: '#eee',
        trailWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
          value: '80%',
          alignToBottom: true,
          style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem',
            color: '#27A376',
          },
        },
        from: { color: '#27A376' },
        to: { color: '#27A376' },
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color);
          bar.setText('100%');
          bar.text.style.color = state.color;
        },
      });

      semiCircleBar.current.animate(1.0);
    });

    return () => {
      if (semiCircleBar.current) semiCircleBar.current.destroy();
    };
  }, []);

  useEffect(() => {
    import('progressbar.js').then((ProgressBar) => {
      if (!ProgressBar || !containerLineRef1.current || !containerLineRef2.current) return;

      lineBar1.current = new ProgressBar.Line(containerLineRef1.current, {
        strokeWidth: 3,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FB8B4C',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: { width: '40%', height: '100%' },
        text: {
          style: {
            color: '#000',
            position: 'absolute',
            right: '0',
            top: '0px',
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: false
        },
        from: { color: '#27A376' },
        to: { color: '#27A376' },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 45) + ' %');
        }
      });

      lineBar2.current = new ProgressBar.Line(containerLineRef2.current, {
        strokeWidth: 4.5,
        easing: 'easeInOut',
        duration: 1400,
        color: '#27A376',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: { width: '25%', height: '100%' },
        text: {
          style: {
            color: '#000',
            position: 'absolute',
            right: '0',
            top: '0px',
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: false
        },
        from: { color: '#FFEA82' },
        to: { color: '#ED6A5A' },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 25) + ' %');
        }
      });

      lineBar1.current.animate(1.0);
      lineBar2.current.animate(1.0);
    });

    return () => {
      if (lineBar1.current) lineBar1.current.destroy();
      if (lineBar2.current) lineBar2.current.destroy();
    };
  }, []);

  return (
    <div className="border border-neutral-200 rounded-md p-3">
      <div className="flex items-center border-b border-neutral-200 pb-4">
        <p className="flex items-center text-base font-medium text-black pr-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M12 21C7.0293 21 3 16.9707 3 12C3 7.9698 5.6487 4.5588 9.3 3.4122V5.3238C7.75283 5.95204 6.47202 7.09834 5.67665 8.5666C4.88129 10.0349 4.62079 11.7339 4.93973 13.373C5.25866 15.0121 6.13721 16.4895 7.42509 17.5524C8.71297 18.6153 10.3301 19.1977 12 19.2C13.4344 19.2 14.8361 18.7716 16.0256 17.9699C17.215 17.1682 18.138 16.0296 18.6762 14.7H20.5878C19.4412 18.3513 16.0302 21 12 21ZM20.955 12.9H11.1V3.045C11.3961 3.0153 11.6967 3 12 3C16.9707 3 21 7.0293 21 12C21 12.3033 20.9847 12.6039 20.955 12.9ZM12.9 4.8558V11.1H19.1442C18.9439 9.51385 18.2216 8.0394 17.0911 6.90891C15.9606 5.77842 14.4862 5.05613 12.9 4.8558Z" fill="currentColor"/>
          </svg>
          Sustainability Score
        </p>
        <div className="border border-neutral-200 rounded-lg ml-auto">
          <SustomSelectDropdown />
        </div>
      </div>

      <div className="mt-12">
        
        <div className='border-b border-neutral-200 pb-6'>
          <div ref={containerRef} className=""></div>
        </div>
       
        <div className='space-y-4 mt-8'>
          <div className='relative'>
            <p className='flex items-center text-sm font-medium text-black mb-3'>Environment</p>
            <div className='bg-zinc-200/50'>
              <div ref={containerLineRef1} className=""></div>
            </div>
          </div>
          <div className='relative'>
            <p className='flex items-center text-sm font-medium text-black mb-3'>Community</p>
            <div className='bg-zinc-200/50'>
              <div ref={containerLineRef2} className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}