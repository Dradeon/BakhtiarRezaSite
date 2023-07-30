import React from 'react'
import {subtitle, changelogList} from '../../Data/ChangelogData'
import styles from './Changelog.module.scss'

const Changelog = () => {
  return (
    <div className={styles.container}>
        <div className={styles.Header}>
            <h1>Changelog</h1>
            <p>{subtitle}</p>
        </div>
        <div>
            {changelogList.map((item)=>{
                return <div>
                    <h2>{item.title}</h2>
                    <p>{item.date.toDateString()}</p>
                    <p>{item.description}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Changelog