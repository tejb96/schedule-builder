// SelectTerm.jsx

import {Checkbox, ListItemText, MenuItem, Select} from "@mui/material";

const SelectTerm = ({onSelectTerm,selectedTerm, terms}) => {

    return (
        <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedTerm}
            onChange={(e)=>onSelectTerm(e.target.value)}
            // input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
            // MenuProps={MenuProps}
        >
            {terms.map((term) => (
                <MenuItem key={term} value={term}>
                    <Checkbox checked={selectedTerm.indexOf(term) > -1} />
                    <ListItemText primary={term} />
                </MenuItem>
            ))}
        </Select>

    );
};

export default SelectTerm;
