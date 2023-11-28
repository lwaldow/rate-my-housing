'use client'

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

interface FilterProps {
    searchQuery: string;
    setSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
    sortOptions: ('highestReview' | 'mostReviews')[];
    setSortOptions: (values: ('highestReview' | 'mostReviews')[]) => void;
}

const sortOptionsLabels: Record<'highestReview' | 'mostReviews', string> = {
    highestReview: 'Highest Review',
    mostReviews: 'Most Reviews',
};

export default function Filterbar({
    searchQuery,
    setSearchQuery,
    sortOptions,
    setSortOptions,
}: FilterProps) {
    const handleSortChange = (
        event: React.ChangeEvent<{ value: ('highestReview' | 'mostReviews')[] }>
    ) => {
        setSortOptions(event.target.value as ('highestReview' | 'mostReviews')[]);
    };


    return (
        <div className="flex justify-between items-center p-4 border-b min-h-32 h-32 max-h-32 border-gray-400">
            <TextField
                sx={{ minWidth: 600 }}
                id="search-bar"
                className="text"
                value={searchQuery}
                onChange={setSearchQuery}
                label="Enter a listing name"
                variant="outlined"
                placeholder="Search..."
                size="small"
                InputProps={{
                    endAdornment:
                        <IconButton aria-label="search">
                            <SearchIcon style={{ fill: "blue" }} />
                        </IconButton>
                }}
            />

            <div className="flex items-center justify-end">
                <FormControl sx={{minWidth: "240px"}}>
                    <InputLabel size="small">Sort By:</InputLabel>
                    <Select
                        multiple
                        value={sortOptions}
                        onChange={handleSortChange}
                        size="small"
                        renderValue={(selected) => (
                            <div>
                                {selected.map(val => sortOptionsLabels[val]).join(", ")}
                            </div>
                        )}
                    >
                        <MenuItem value="highestReview">
                            <Checkbox checked={sortOptions.includes('highestReview')} />
                            <ListItemText primary="Highest Review" />
                        </MenuItem>
                        <MenuItem value="mostReviews">
                            <Checkbox checked={sortOptions.includes('mostReviews')} />
                            <ListItemText primary="Most Reviews" />
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}