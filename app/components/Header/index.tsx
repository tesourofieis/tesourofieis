import React, { useContext } from 'react'
import Switch from 'react-switch'
import { Container } from './styles'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.primary)}
        onColor={colors.text}
      />
    </Container>
  )
}

export default Header
