import React from 'react'

import { Container, Ul, Leatherboard, User } from './styles'
import userPlaceholder from '../../assets/images/user-placeholder.png'

export default function Entertainment() {
  return (
    <Container>
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
          <button type="button">Mais detalhes</button>
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
          <button type="button">Mais detalhes</button>
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
          <button type="button">Mais detalhes</button>
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
          <button type="button">Mais detalhes</button>
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
          <button type="button">Mais detalhes</button>
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
          <button type="button">Mais detalhes</button>
        </li>
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
