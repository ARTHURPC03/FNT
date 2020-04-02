import styled from 'styled-components'

export const Container = styled.header`
  height: 60px;
  background: #0d0d0d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  width: 100%;
  a {
    text-decoration: none;
    color: #fff;
    div {
      text-align: right;

      strong {
        display: inline;
        color: #fff;
      }

      svg {
        vertical-align: bottom;
      }
    }
  }
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 42px;
  color: rgb(153, 153, 153);
  min-width: 980px;
  font-size: 14px;
`

export const DivLogo = styled.div`
  font-size: 20px;
  strong {
    margin-left: 10px;
  }
`
