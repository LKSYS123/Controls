import React from 'react'
import { useState } from 'react';
import './FloatingMenu.css'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MedicationIcon from '@mui/icons-material/Medication';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HotelIcon from '@mui/icons-material/Hotel';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';

export default function FloatingMenuA(props) {
    const { id_move, variant, size, color, label, onClick } = props

    const buttons = [
        <Button startIcon={<CreditCardIcon />} key="corona" onClick={onClick.addVectorSrc}>국민지원금</Button>,
        <Button startIcon={<HealthAndSafetyIcon />} key="hospital" onClick={onClick.addVectorSrc2}>선별진료소</Button>,
        <Button startIcon={<RestaurantIcon />} key="restaurant" onClick={onClick.addVectorSrc3}>음식점</Button>,
        <Button startIcon={<LocalCafeIcon />} key="cafe" onClick={onClick.addPolygon7}>카페</Button>,
        <Button startIcon={<PhoneIcon />} key="order" onClick={onClick.addPolygon6}>네이버주문</Button>,
        <Button startIcon={<HomeIcon />} key="camp" onClick={onClick.addPolygon5}>캠핑장</Button>,
        <Button startIcon={<HotelIcon />} key="pension" onClick={onClick.addPolygon4}>팬션</Button>,
        <Button startIcon={<LocalConvenienceStoreIcon />} key="shop" onClick={onClick.addPolygon3}>편의점</Button>
    ];
    const options = [
        <Button startIcon={<LocalParkingIcon />} key="parking">주차장</Button>,
        <Button startIcon={<MedicationIcon />} key="pharmacy">약국</Button>,
        <Button startIcon={<LocalGasStationIcon />} key="gas">주유소</Button>,
        <Button startIcon={<LocalGroceryStoreIcon />} key="market">마트</Button>
    ];

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    const handleClickAnchor = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAnchor = () => {
        setAnchorEl(null);
    };

    return (
        <Box id={id_move} sx={{ '& > :not(style)': { m: 1 } }}>
            <ButtonGroup 
                variant={variant} 
                size={size}
                color={color}
                aria-label={label}>
                {buttons}
            </ButtonGroup>
            <IconButton
                className = 'IconBtn'
                aria-label="more"
                id="long-button"
                aria-controls={openAnchor ? 'long-menu' : undefined}
                aria-expanded={openAnchor ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClickAnchor}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{ 'aria-labelledby': 'long-button' }}
                anchorEl={anchorEl}
                open={openAnchor}
                onClose={handleCloseAnchor}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch'
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem 
                        key={option} 
                        selected={option === 'Pyxis'} 
                        onClick={handleCloseAnchor}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}


