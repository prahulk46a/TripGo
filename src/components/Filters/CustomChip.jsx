import { Chip } from "@mui/material";

const CustomChip = ({ label, isSelected, onClick }) => {
  return (
    <Chip
      label={label}
      clickable
      onClick={onClick}
      sx={{
        mx: 0.5,
        height: 36,
        fontWeight: isSelected ? 600 : 400,
        bgcolor: isSelected ? "black" : "transparent",
        color: isSelected ? "white" : "inherit",
        border: isSelected ? "none" : "1px solid #e0e0e0",
        transition: "all 0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: isSelected
            ? "0 4px 8px rgba(0,0,0,0.2)"
            : "0 2px 4px rgba(0,0,0,0.1)",
          bgcolor: isSelected ? "black" : "#f5f5f5",
        },
        "&:active": {
          transform: "translateY(0)",
          boxShadow: "none",
        },
      }}
    />
  );
};

export default CustomChip;
