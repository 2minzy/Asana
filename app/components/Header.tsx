import React from 'react';
import { Toolbar, Typography, Link as LinkText } from '@material-ui/core';
import Link from 'next/link';
import { useAuth } from 'lib/useAuth';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: #fff;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  padding: 50px 80px;
  transition: 0.5s;
  z-index: 30;
`;

const Logo = styled.a`
  font-family: 'DM Serif Text', serif;
  font-size: 2.6rem;
  cursor: pointer;
`;

const Button = styled.a`
  color: white;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    border-bottom: white 1px solid;
  }
`;

export default function Header() {
  const { user } = useAuth();

  const links = [
    !user && { label: 'Sign Up', href: '/auth/signup' },
    !user && { label: 'Sign In', href: '/auth/signin' },
    user && { label: 'Create', href: '/streams/new' },
    user && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter(link => link)
    .map(({ label, href }) => {
      return (
        <Link href={href} key={href}>
          <Button>{label}</Button>
        </Link>
      );
    });

  return (
    <NavBar>
      <Link href='/'>
        <div>
          <Logo>Asana</Logo>
        </div>
      </Link>
      <div>{links}</div>
    </NavBar>
  );
}

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   list: {
//     width: 250,
//   },
// }));
