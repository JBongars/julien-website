// import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from '../../components/SideBar';

// const HomePageStyled: any = styled.div``

export interface HomePage { }

export default function HomePage() {
    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <SideBar />
        </Box>
    )
}
