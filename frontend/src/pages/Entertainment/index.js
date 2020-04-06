import React from 'react'

import { Container, Ul } from './styles'

export default function Entertainment() {
  return (
    <Container>
      <div>Adicionar Recomendação de Entretenimento</div>
      <Ul>
        <li>
          <strong>Título</strong>
          <span>por Franco, 1 hora atrás</span>
          <iframe
            title="devmedia"
            width="476"
            height="267.75"
            src="https://www.youtube.com/embed/SbeMrbJ6R9E"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <br />
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <span>por Franco, 15 horas atrás</span>
          <iframe
            title="ff"
            width="476"
            height="267.75"
            src="https://www.youtube.com/embed/Lz1YQYU9OPA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <br />
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <span>por Franco, 15 horas atrás</span>
          <iframe
            title="vvar3"
            width="476"
            height="267.75"
            src="https://www.youtube.com/embed/BS0s1jxzL1g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <br />
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <span>por Franco, 15 horas atrás</span>
          <iframe
            title="MMs"
            width="476"
            height="267.75"
            src="https://www.youtube.com/embed/ndbvmYGb1ZI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <br />
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <span>por Franco, 15 horas atrás</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            perferendis doloribus voluptas hic, ratione recusandae dicta cum
            exercitationem aliquam molestias sequi mollitia dignissimos
            voluptate, ex amet fugiat est voluptates quibusdam.
          </p>
          <button type="button">Ver noticia completa</button>
        </li>

        <li>
          <strong>Título</strong>
          <span>por Franco, 15 horas atrás</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            perferendis doloribus voluptas hic, ratione recusandae dicta cum
            exercitationem aliquam molestias sequi mollitia dignissimos
            voluptate, ex amet fugiat est voluptates quibusdam.
          </p>
          <button type="button">Ver noticia completa</button>
        </li>
      </Ul>
    </Container>
  )
}
