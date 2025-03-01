import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Button } from "@mui/material";

const SortBy = () => {
  return (
    <Button
      endIcon={<ExpandMoreIcon />}
      sx={{
        ml: "auto",
        textTransform: "none",
        whiteSpace: "nowrap",
      }}
    >
      Sort By
    </Button>
  );
};

export default SortBy;
