import React from "react";

const Resume = () => {
  const handle=()=>{
    window.location.href = 'https://drive.google.com/file/d/1qC_xI93Qhu33-4k_yg3sbsw0U_dVa6VI/view?usp=sharing';
  }
  return (
    <section className='cta'>
      <p className='cta-text'>
        To know more about me <br className='sm:block hidden' />
        Here is my Resume and Achievements...
      </p>
      <button  onClick={handle} className="btn"> This way
      </button>
    </section>
  );
};

export default Resume;
