import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper>
      <h1>KRISTIAN GOGOV</h1>
      <p><b>Operations Engineer</b> @ The Coca-Cola Company</p>
      <p>📅 Joined <b>Nov 2023</b></p>
      <p><b>🎂 April 4th</b></p>
      <h5>🚧 This page is still under construction 🚧</h5>
      <h5>Visit my <a href='https://github.com/kristiangogov' target='_blank'>/github</a> in the meantime.</h5>
    </Wrapper>
  )
}

const Wrapper = styled.section`
max-width: 650px;
h1 {
  text-transform: capitalize;
  font-weight: 900;
  letter-spacing: -4px;
}
a {
  color: var(--accent-color);
  font-weight: 900;
}
a:hover{
    text-decoration: underline;
    text-decoration-thickness: 3px;
}
h5 {
    margin-top: 3rem;
}
`

export default Hero
