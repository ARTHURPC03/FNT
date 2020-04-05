import React from 'react'
import { FaExternalLinkAlt} from 'react-icons/fa'
import {IoIosStarHalf,IoIosStarOutline,IoIosStar} from 'react-icons/io'

import { Container, Ul, Stars, Leatherboard, User } from './styles'

import userPlaceholder from '../../assets/images/user-placeholder.png'

export default function Main() {
  return (
    <Container>
      <Ul>
        {[...Array(6)].map((x, i) => {
          return (
            <li key={i}>
              <div className="top-line">
                <strong>Título</strong>

                <Stars>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarHalf />
                  <IoIosStarOutline/>
                </Stars>
              </div>
              <small>por <a href="#root">Franco</a>, 15 horas atrás</small>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                perferendis doloribus voluptas hic, ratione recusandae dicta cum
                exercitationem aliquam molestias sequi mollitia dignissimos
                voluptate, ex amet fugiat est voluptates quibusdam.
              </p>
              <div className="more-info">
                <button type="button">Mais informações</button>

                <button type="button">Ver noticia completa <FaExternalLinkAlt color="#000" /> </button>
              </div>
            </li>
            )
        })}
      </Ul>
      <Leatherboard>
        <h1>Placar</h1>
        <small>Aqui aparecerá o pessoal que mais interage na plataforma! \õ/</small>

        {[...Array(10)].map((x,i) => (
          <User key={i}>
            <img src={userPlaceholder} alt="User profile"/>
            <div className="details">
              <h3>Fleflis</h3>
              <span className="first">150</span>
            </div>
          </User>
        ))}
      </Leatherboard>
    </Container>
  )
}
