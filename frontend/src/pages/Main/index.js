import React from 'react'

import { Container, Ul } from './styles'

export default function Main() {
  return (
    <Container>
      <h1>Aqui é a Caixa de conteúdo.</h1>
      <Ul>
        <li>
          <strong>titulo</strong>
          <p>por Franco, 15 horas atrás</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            perferendis doloribus voluptas hic, ratione recusandae dicta cum
            exercitationem aliquam molestias sequi mollitia dignissimos
            voluptate, ex amet fugiat est voluptates quibusdam.
          </p>
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>titulo </strong>
          <p>por Franco, 15 horas atrás</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            perferendis doloribus voluptas hic, ratione recusandae dicta cum
            exercitationem aliquam molestias sequi mollitia dignissimos
            voluptate, ex amet fugiat est voluptates quibusdam.
          </p>
          <button>Ver noticia completa</button>
        </li>

        <li>
          <strong>titulo</strong>
          <p>por Franco, 15 horas atrás</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            perferendis doloribus voluptas hic, ratione recusandae dicta cum
            exercitationem aliquam molestias sequi mollitia dignissimos
            voluptate, ex amet fugiat est voluptates quibusdam.
          </p>
          <button>Ver noticia completa</button>
        </li>

        <li>
          <strong>titulo</strong>
          <p>por Franco, 15 horas atrás</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            perferendis doloribus voluptas hic, ratione recusandae dicta cum
            exercitationem aliquam molestias sequi mollitia dignissimos
            voluptate, ex amet fugiat est voluptates quibusdam.
          </p>
          <button>Ver noticia completa</button>
        </li>
      </Ul>
    </Container>
  )
}
