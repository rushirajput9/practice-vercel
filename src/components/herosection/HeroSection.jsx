import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import styles from "./HeroSection.module.css";
import chefImg from "../../assets/chef.png";
import sfdBurger from "../../assets/sfdburger.svg";
import deliveryScooter from "../../assets/scooterDelivery.png";

export default function HeroSection({ onOrderClick }) {
  return (
    <Box className={styles.heroSection}>
      <Container maxWidth={false} className={styles.heroContent}>
        
        <Box sx={{ width: "100%", px: 17 }} className={styles.textContent}>
          <Box className={styles.badge}>
            <img
              src={sfdBurger}
              alt="Fast delivery icon"
              className={styles.badgeIcon}
            />
            <span>Super fast delivery</span>
          </Box>
          <Typography
            variant="h1"
            sx={{ fontSize: "90px", fontWeight: 700 }}
            className={styles.heading}
          >
            Food delivery within <br />
            <span className={styles.highlight}>30 minutes</span>
          </Typography>
          <Typography sx={{ fontSize: "30px" }} className={styles.description}>
            Fresh, tasty food delivered in minutes. Just pick, order, and enjoy!
          </Typography>
          <Box>
            <Button className={styles.orderBtn} onClick={onOrderClick}>
              Order Now
            </Button>
          </Box>
          <Box className={styles.deliveryContainer}>
            <img src={deliveryScooter} height={50} alt="Delivery Scooter" />
            <span className={styles.extraInfo}>Free delivery around 5 km</span>
          </Box>
          <img className={styles.burgerAbs} height={80} src={sfdBurger} alt="" />
        </Box>

      
        <Box className={styles.chefImgContainer}>
          <img
            src={chefImg}
            alt="Chef holding dish"
            className={styles.chefImage}
          />
        </Box>
      </Container>
    </Box>
  );
}
