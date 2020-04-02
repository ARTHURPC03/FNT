import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
  h1 {
    margin-top: 80px;
    margin-bottom: 24;
    transition: color 1s ease 0s, transform 1s ease 0s;
    color: #fff;
  }
`

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
  li {
    background: #55bcfc;
    padding: 24px;
    border-radius: 8px;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.2s ease 0s;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(11, 10, 13);
    border-image: initial;
    &:hover {
      border-width: 2px;
      border-style: solid;
      border-color: #e02041;
      border-image: initial;
    }
    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: transparent;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      border-radius: 8px;
      transition: border 0.2s ease 0s, transform 0.2s ease 0s;
      border-width: 3px;
      border-style: solid;
      border-color: transparent;
      border-image: initial;
      svg {
        transition: border 0.2s ease 0s, transform 0.2s ease 0s;
        color: white;
      }
      &:hover {
        transform: translateY(-7px);
        border-color: transparent;
        svg {
          color: white;
        }
      }
    }
    strong {
      display: block;
      margin-bottom: 16px;
      transition: color 1s ease 0s, transform 1s ease 0s;
      color: white;
    }
    p + strong {
      margin-top: 32px;
    }
    p {
      color: #0d0d0d;
      line-height: 21px;
      font-size: 16px;
    }
  }
`
