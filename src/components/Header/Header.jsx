// import React from 'react'

import { Link } from "react-router-dom";
import S from './Header.styled'

export default function Header() {
  return (
    <S.Header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </S.Header>
  )
}
