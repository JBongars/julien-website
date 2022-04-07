import styled from "@emotion/styled"
import * as React from "react";

const HelloStyled: any = styled.h1`
    color: red;
`

export interface HelloProps {
    name: string;
}

export default function Hello({ name }: HelloProps) {
    return (
        <HelloStyled>
            Hello {name}!
        </HelloStyled>
    )
};