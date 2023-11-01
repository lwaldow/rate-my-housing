'use client'

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";


export default function Filterbar() {

    const [searchQuery, setSearchQuery] = React.useState("");

    const [availableOnly, setAvailableOnly] = React.useState<boolean>(true);

    const handleFilterChangeAvailableOnly = (event: SelectChangeEvent) => {
        setAvailableOnly(event.target.value === "true" ? true : false);
    };

    interface SearchBarProps {
        searchQuery: string
        setSearchQuery: Function
    }

    const SearchBar = ({searchQuery, setSearchQuery}:SearchBarProps) => (
        <form>
          <TextField
            sx={{minWidth: 400}}
            id="search-bar"
            className="text"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            }}
            label="Enter a listing name"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </form>
      );      

    return (
        <div className="flex justify-between items-center pl-4 pr-4 border-b border-gray-400">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <div className="flex items-center justify-end">
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel id="filter-select-available">Availability</InputLabel>
                    <Select
                        labelId="filter-select-available"
                        id="filter-select"
                        value={availableOnly ? "true" : "false"}
                        label="Availability"
                        onChange={handleFilterChangeAvailableOnly}
                        size="small"
                    >
                        <MenuItem value={"true"}>Available Only</MenuItem>
                        <MenuItem value={"false"}>All Listings</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel id="filter-select-available">Availability</InputLabel>
                    <Select
                        labelId="filter-select-available"
                        id="filter-select"
                        value={availableOnly ? "true" : "false"}
                        label="Availability"
                        onChange={handleFilterChangeAvailableOnly}
                        size="small"
                    >
                        <MenuItem value={"true"}>Available Only</MenuItem>
                        <MenuItem value={"false"}>All Listings</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}