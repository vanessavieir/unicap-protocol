'use client'

import { theme } from "@/theme";

const { default: styled } = require("styled-components");

export const TitleArea = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    gap: ${props => props.gap};
    margin-bottom: 60px;
`;

export const Cancel = styled.p`
    font-size: 16px;
    color: ${theme.gray};
    text-decoration: underline;
    :hover {
        cursor: pointer;
    }
`;