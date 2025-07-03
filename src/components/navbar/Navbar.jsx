import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css";
import logo from '../../assets/food-svgrepo-com.svg';

export default function Navbar(props) {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
  <div className={styles.container}>
     <Box sx={{ flexGrow: 1,}}>
      <AppBar
        className={styles.glassNavbar}
        position="fixed"
        sx={{
          backgroundColor: "rgb(255, 255, 255)",
          boxShadow: 0,
          paddingTop:1
        }}
      >
        <Toolbar>
          <img src={logo} className={styles.logo} />

          <Typography
            className={styles.name}
            variant="h4"
            sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "30px" }}
          >
            <span className={styles.logoChar}>Y</span>ummy
            <span className={styles.logoChar}>B</span>ites
          </Typography>

          <Box className={styles.iconBg} onClick={props.onCartClick}>
            <IconButton >
              <Badge badgeContent={totalQuantity} color="error">
                <ShoppingCartIcon sx={{ color: "black", fontSize: "32px"}} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
   </div>
  );
}
