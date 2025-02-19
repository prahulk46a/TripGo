import {
  ArrowDropDown as ArrowDropDownIcon,
  BookmarksOutlined,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  Phone as PhoneIcon,
  Search as SearchIcon,
  Person as PersonIcon, // Add a login icon
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  {
    label: "Tours",
    dropdown: [
      { label: "Day Tours", path: "/day-tours" },
      { label: "Weekend Trips", path: "/weekend-trips" },
      { label: "Custom Tours", path: "/custom-tours" },
    ],
  },
  {
    label: "Prices",
    dropdown: [
      { label: "Standard", path: "/standard" },
      { label: "Premium", path: "/premium" },
      { label: "Group Discounts", path: "/group" },
    ],
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [anchorEl, setAnchorEl] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileOpen(!mobileOpen);
  };

  const toggleMobileDropdown = (label) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleMenuOpen = (event, label) => {
    setAnchorEl((prev) => ({ ...prev, [label]: event.currentTarget }));
  };

  const handleMenuClose = (label) => {
    setAnchorEl((prev) => ({ ...prev, [label]: null }));
  };

  return (
    <AppBar
      position="static"
      color="default"
      sx={{ backgroundColor: "white", boxShadow: 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box component="img" src={logo} alt="Logo" />
              TripGo
            </Typography>
          </Box>

          {/* Mobile Menu Button and Search Icon */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit" sx={{ color: "black" }}>
                <SearchIcon />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer}
                className="menu-icon"
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navLinks.map((item) =>
                item.dropdown ? (
                  <Box key={item.label}>
                    <Button
                      color="inherit"
                      sx={{
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                      }}
                      onClick={(e) => handleMenuOpen(e, item.label)}
                      endIcon={<ArrowDropDownIcon />}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      anchorEl={anchorEl[item.label]}
                      open={Boolean(anchorEl[item.label])}
                      onClose={() => handleMenuClose(item.label)}
                    >
                      {item.dropdown.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          onClick={() => {
                            handleMenuClose(item.label);
                            navigate(subItem.path);
                          }}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}
            </Box>
          )}

          {/* Desktop Actions (Search, Bookmarks, Login, Contact) */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit" sx={{ color: "black" }}>
                <SearchIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ color: "black" }}
                onClick={() => navigate("/bookmarks")}
              >
                <Badge badgeContent={5} color="warning">
                  <BookmarksOutlined />
                </Badge>
              </IconButton>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 28,
                  borderColor: "#e0e0e0",
                  color: "black",
                  mx: 1,
                  textTransform: "none",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  borderRadius: 28,
                  backgroundColor: "black",
                  "&:hover": { backgroundColor: "#333" },
                  textTransform: "none",
                }}
                onClick={() => navigate("/contact")}
              >
                Contact-us
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {/* Navigation Links */}
            {navLinks.map((item) => (
              <Box key={item.label}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={item.dropdown ? undefined : Link}
                    to={item.dropdown ? undefined : item.path}
                    onClick={
                      item.dropdown
                        ? () => toggleMobileDropdown(item.label)
                        : toggleDrawer
                    }
                  >
                    <ListItemText primary={item.label} />
                    {item.dropdown &&
                      (openDropdowns[item.label] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      ))}
                  </ListItemButton>
                </ListItem>
                {item.dropdown && (
                  <Collapse
                    in={openDropdowns[item.label]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.dropdown.map((subItem) => (
                        <ListItemButton
                          key={subItem.label}
                          sx={{ pl: 4 }}
                          onClick={() => {
                            toggleDrawer();
                            navigate(subItem.path);
                          }}
                        >
                          <ListItemText primary={subItem.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}

            {/* Divider */}
            <Divider />

            {/* Bookmarks */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/bookmarks")}>
                <ListItemIcon>
                  <Badge badgeContent={5} color="warning">
                    <BookmarksOutlined />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Bookmarks" />
              </ListItemButton>
            </ListItem>

            {/* Login */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/login")}>
                <ListItemIcon>
                  <PersonIcon /> {/* Use the login icon */}
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>

            {/* Contact */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/contact")}>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="Contact-us" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
