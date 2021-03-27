import styles from './Loader.module.css'
import loader from '../../../assets/images/Spinner.svg'
import React from 'react'

let Loader: React.FC = () => {
    return(
        <div className={styles.loader}>
            <img src={loader} alt="loader" />
        </div>
        
    )
}

export default Loader;