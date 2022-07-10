import React, { FC, useState } from 'react'
import logo from './VK_Monochrome_Logo_t.png'

import styles from './Header.module.css'

import { Search } from '@mui/icons-material'

const Header: FC = () => {
  const [searchActive, setSearchActive] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles['image-wrapper']}>
        <img src={logo} alt='' />
      </div>
      <div className={styles.wrapper}>
        {!searchActive && <Search />}
        <input
          type='text'
          placeholder='Поиск'
          onClick={() => setSearchActive(true)}
        />
      </div>
    </header>
  )
}

export default Header
