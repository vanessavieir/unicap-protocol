'use client'
const { default: styled } = require("styled-components");
import { theme } from "./theme";

export const ContainerLogin = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.background};
`;

export const LoginBox = styled.div`
    width: 589px;
    height: 741px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    background-color: #FFFFFF;
`;

export const BoxTitle = styled.h1`
    font-size: ${props => props.size};
    font-weight: 500;
    color: #000000;
`;

export const BoxText = styled.p`
    font-size: 16px;
    color: ${theme.gray};
`;

export const LogoArea = styled.div`
    width: 370px;
    margin-bottom: 75px;
`;

export const Logo = styled.img`
    width: 198px;
    height: 76px;
`;
