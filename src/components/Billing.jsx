import React from 'react';

import { apple, bill, google } from '../assets';

import styles, { layout } from '../style';

const Billing = () => {
  console.log('billing');
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-full h-full relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white_gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink_gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Martis eu adipiscig ultrices ametodio aenean neque. Fusce ipsum orci rhonus aliporttitor integer platea placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store" className="w-32 h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google_play" className="w-32 h-[42px] object-containcursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
