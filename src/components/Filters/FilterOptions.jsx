import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  Typography,
} from "@mui/material";

const FilterOptions = ({
  type, // "radio" or "checkbox"
  label,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {label}
      </Typography>
      <FormControl component="fieldset" sx={{ width: "100%" }}>
        <Grid container spacing={1}>
          {options.map((option) => (
            <Grid item xs={6} key={option.value}>
              {type === "radio" ? (
                <FormControlLabel
                  value={option.value}
                  control={
                    <Radio
                      checked={selectedValue === option.value}
                      onChange={onChange}
                      color="primary"
                    />
                  }
                  label={option.label}
                />
              ) : (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedValue.includes(option.value)}
                      onChange={onChange}
                      value={option.value}
                      color="primary"
                    />
                  }
                  label={option.label}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </FormControl>
    </Box>
  );
};

export default FilterOptions;
