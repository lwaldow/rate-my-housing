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
        setSearchQuery: Function
    }

    const SearchBar = ({setSearchQuery}:SearchBarProps) => (
        <form>
          <TextField
            id="search-bar"
            className="text"
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
        <div className="flex justify-between items-center border-gray-400 p-4">
            <SearchBar setSearchQuery={setSearchQuery}/>
            <div className="flex items-center justify-end">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="filter-select-available">Availability</InputLabel>
                    <Select
                        labelId="filter-select-available"
                        id="filter-select"
                        value={availableOnly ? "true" : "false"}
                        label="Availability"
                        onChange={handleFilterChangeAvailableOnly}
                    >
                        <MenuItem value={"true"}>Available Only</MenuItem>
                        <MenuItem value={"false"}>All Listings</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="filter-select-available">Availability</InputLabel>
                    <Select
                        labelId="filter-select-available"
                        id="filter-select"
                        value={availableOnly ? "true" : "false"}
                        label="Availability"
                        onChange={handleFilterChangeAvailableOnly}
                    >
                        <MenuItem value={"true"}>Available Only</MenuItem>
                        <MenuItem value={"false"}>All Listings</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}