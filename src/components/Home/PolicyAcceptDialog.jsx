import React, { useEffect } from 'react';
import styles from './../../pages/styles.module.css';

export function PolicyAcceptDialog() {
  const [isVisible, setIsVisible] = React.useState('');
  useEffect(() => {
    const check = localStorage.getItem('EU_COOKIE_LAW_CONSENT');
    if (check) {
      setIsVisible('hidden');
    } else {
      setIsVisible('');
    }
  }, []);
  useEffect(() => {
    const check = localStorage.getItem('EU_COOKIE_LAW_CONSENT');
    if (check) {
      setIsVisible('hidden');
    } else {
      setIsVisible('');
    }
  }, []);
  const handleEulaAccept = () => {
    localStorage.setItem('EU_COOKIE_LAW_CONSENT', 'true');
    setIsVisible('hidden');
  };
  return (
    <section
      className={
        styles.features + 'flex-1 font-inter overflow-hidden ' + isVisible
      }
    >
      <div className="fixed right-0 left-0 bottom-0 z-10 flex justify-center w-full">
        <div className="bg-secondary-300 flex justify-center items-center w-full rounded-md px-5 pb-2 pt-2">
          <div className="flex flex-col md:flex-row space-y-4 lg:space-y-0 w-full xl:w-11/12 py-2 justify-around">
            <div className="text-white flex w-full items-center md:w-3/4 text-xs">
              We use our own and third-party cookies and other tracking
              technologies, by continuing to browse the website, you accept our
              use of cookies and tracking technologies.
            </div>
            <div className="flex  flex-1">
              <a onClick={handleEulaAccept}>
                <div className="text-xs text-center py-1 px-7 text-white font-semibold rounded-lg ml-0 lg:ml-5 xl:ml-10 cursor-pointer bg-blue-400">
                  ACCEPT
                </div>
              </a>
              <a className="no-underline" href="/cookie-policy">
                <div className="text-xs ml-10 md:ml-0 lg:ml-10 py-1 text-center ml-0 text-white font-semibold">
                  LEARN MORE
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="fixed bg-green-400 bottom-0 p-5 mx-auto w-full z-10"></div> */}
      </div>
    </section>
  );
}
