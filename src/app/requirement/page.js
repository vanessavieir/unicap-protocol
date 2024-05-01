'use client'
import { Container, Content } from '../../globalStyles'
import React from 'react'
import NavBar from '../../components/navBar'
import Header from '../../components/header'

const Requirement = () => {
  return (
    <Container>
        <NavBar />
            <Content>
                <Header title={'DIRETORIA DE GESTÃO ESCOLAR'} headerKey={'register'} />

            </Content>
    </Container>
  )
}

export default Requirement