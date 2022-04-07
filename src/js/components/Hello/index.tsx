import styled, { CreateStyledComponent } from "@emotion/styled"
import * as React from "react";

const HelloHeader: any = styled.h1`
    color: red;
`

export interface HelloProps {
    name: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <HelloHeader>
                Hello {this.props.name}!
            </HelloHeader>
        );
    }
}