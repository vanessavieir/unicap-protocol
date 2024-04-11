'use client'
import React from 'react'
import { ContainerLogin, LoginBox, BoxTitle, BoxText, LogoArea, Logo } from '@/globalStyles'
import {
  InputGroup,
  ForgotPassword,
  TitleArea
} from './styles'
import Input from '@/components/input'
import Button from '@/components/button'
import Link from 'next/link'
import { GoPerson } from "react-icons/go";
import { GoLock } from "react-icons/go";
import { useRouter } from 'next/router'

const Login = () => {

  return (
    <ContainerLogin>
      <LoginBox>

        <LogoArea>
          <Logo src={'unicap-logo.png'} />
        </LogoArea>

        <TitleArea>
          <BoxTitle size={'26px'}>Bem vindo(a)!</BoxTitle>
          <BoxText>Realize login na sua conta</BoxText>
        </TitleArea>

        <InputGroup>
          <Input holder={'N de matrícula'} icon={<GoPerson color='#000000' size={25} />} />
          <Input holder={'****************'} icon={<GoLock color='#000000' size={25} />} />
        </InputGroup>

        <Button title={'Entrar'} press={() => {}} />

        <Link href={'/recoverPassword'}>
          <ForgotPassword>Esqueceu a senha?</ForgotPassword>
        </Link>
      </LoginBox>
    </ContainerLogin>
  )
}

export default Login