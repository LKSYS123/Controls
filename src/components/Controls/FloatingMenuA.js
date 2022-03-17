import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function FloatingMenuA(props) {
    const { id_move, variant, size, color, label, onClick } = props

    const buttons = [
        <Button key="point" onClick={onClick.addPoint1}>Point</Button>,
        <Button key="polygon1" onClick={onClick.addPolygon1}>Polygon1</Button>,
        <Button key="polygon2" onClick={onClick.addPolygon2}>Polygon2</Button>
    ];

    return (
        <Box id={id_move} sx={{ '& > :not(style)': { m: 1 } }}>
            <ButtonGroup
                orientation="vertical" 
                variant={variant} 
                size={size}
                color={color}
                aria-label={label}>
            {buttons}
            </ButtonGroup>
        </Box>
    )
}
