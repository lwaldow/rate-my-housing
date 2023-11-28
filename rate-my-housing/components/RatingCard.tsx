'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function RatingCard({
    attribute,
    value,
    onChange,
}: {
    attribute: string;
    value: number;
    onChange: (attribute: string, value: number) => void;
}) {

    const [hover, setHover] = React.useState(-1);

    return (
        <Card sx={{margin: "10px", marginLeft: "100px", marginRight: "100px", display: "flex", justifyContent: "center"}}>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography variant="h6">{capitalizeFirstLetter(attribute)}</Typography>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Rating
                        name={attribute}
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                            onChange(attribute, newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}