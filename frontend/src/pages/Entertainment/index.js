import React from 'react'

import { Container, Ul } from './styles'

export default function Entertainment() {
  return (
    <Container>
      <div>Adicionar Recomendação de Entretenimento</div>
      <Ul>
        <li>
          <strong>Título</strong>
          <iframe
            title="devmedia"
            width="500"
            height="200"
            src="https://www.youtube.com/embed/SbeMrbJ6R9E"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <span>por Franco, 1 hora atrás</span>
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <iframe
            title="ff"
            width="500"
            height="200"
            src="https://www.youtube.com/embed/Lz1YQYU9OPA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <span>por Franco, 15 horas atrás</span>
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <iframe
            title="vvar3"
            width="500"
            height="200"
            src="https://www.youtube.com/embed/BS0s1jxzL1g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <span>por Franco, 15 horas atrás</span>
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            perferendis doloribus voluptas hic, ratione recusandae dicta cum
            exercitationem aliquam molestias sequi mollitia dignissimos
            voluptate, ex amet fugiat est voluptates quibusdam.
          </p>
          <span>por Franco, 15 horas atrás</span>
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            perferendis doloribus voluptas hic, ratione recusandae dicta cum
            exercitationem aliquam molestias sequi mollitia dignissimos
            voluptate, ex amet fugiat est voluptates quibusdam.
          </p>
          <span>por Franco, 15 horas atrás</span>
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            perferendis doloribus voluptas hic, ratione recusandae dicta cum
            exercitationem aliquam molestias sequi mollitia dignissimos
            voluptate, ex amet fugiat est voluptates quibusdam.
          </p>
          <span>por Franco, 15 horas atrás</span>
          <button type="button">Ver noticia completa</button>
        </li>
      </Ul>
    </Container>
  )
}
