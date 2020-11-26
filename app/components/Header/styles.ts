import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`
