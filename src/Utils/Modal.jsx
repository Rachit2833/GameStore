// Modal.js

import React from 'react';
import styles from './Modal.module.css';

function Modal({children}) {

   return (
   <>
         <div className={styles.styledModal}>{children}</div>;
   </>
   )
}

export default Modal



