import React from 'react'
import { Link } from 'react-router-dom'
import { MdPlayCircleOutline } from 'react-icons/md'
import { AiOutlineStock } from 'react-icons/ai'
import { Container, DivLogo, Nav } from './styles'

export default function Header() {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <h1>FNT</h1>
        </Link>
        <Link to="/statistics">
          <DivLogo>
            <AiOutlineStock size={25} />
            <strong>Estátisticas</strong>
          </DivLogo>
        </Link>
        <Link to="/entertainment">
          <DivLogo>
            <MdPlayCircleOutline size={25} />
            <strong>Entretenimento</strong>
          </DivLogo>
        </Link>
        <Link to="/profile">
          <h2>Perfil</h2>
        </Link>
      </Nav>
    </Container>
  )
}
