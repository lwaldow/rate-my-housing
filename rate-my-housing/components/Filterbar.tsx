'use client'

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

interface FilterProps {
    searchQuery: string;
    setSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
    sortOverallRating: 'asc' | 'desc'; // Add sort options for overall rating
    sortNumOfRatings: 'asc' | 'desc'; // Add sort options for number of ratings
    setSortOverallRating: (value: 'asc' | 'desc') => void;
    setSortNumOfRatings: (value: 'asc' | 'desc') => void;
}

export default function Filterbar({
    searchQuery,
    setSearchQuery,
    sortOverallRating,
    sortNumOfRatings,
    setSortOverallRating,
    setSortNumOfRatings,
}: FilterProps) {
    const handleOverallRatingSort = (
        event: React.MouseEvent<HTMLElement>,
        newSort: 'asc' | 'desc'
    ) => {
        if (newSort !== null) {
            setSortOverallRating(newSort);
        }
    };

    const handleNumOfRatingsSort = (
        event: React.MouseEvent<HTMLElement>,
        newSort: 'asc' | 'desc'
    ) => {
        if (newSort !== null) {
            setSortNumOfRatings(newSort);
        }
    };

    return (
        <div className="flex justify-between items-center pl-4 pr-4 border-b border-gray-400">
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
                <ToggleButtonGroup
                    value={sortOverallRating}
                    exclusive
                    onChange={handleOverallRatingSort}
                    aria-label="overall rating sorting"
                    size="small"
                >
                    <ToggleButton value="asc">Asc Rating</ToggleButton>
                    <ToggleButton value="desc">Desc Rating</ToggleButton>
                </ToggleButtonGroup>

                {/* Toggle for number of ratings */}
                <ToggleButtonGroup
                    value={sortNumOfRatings}
                    exclusive
                    onChange={handleNumOfRatingsSort}
                    aria-label="number of ratings sorting"
                    size="small"
                >
                    <ToggleButton value="asc">Asc Num of Ratings</ToggleButton>
                    <ToggleButton value="desc">Desc Num of Ratings</ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    )
}