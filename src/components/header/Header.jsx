import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'

import Icon from '../icon/Icon'

function Header () {
  return (
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Juan Freitas</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/JuanFreitas094/react-jogo-da-velha" />
      </div>
    </div>
  )
}

export default Header