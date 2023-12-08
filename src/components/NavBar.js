import React from "react";
import { Box, Drawer, Typography, IconButton } from "@mui/material"
import { useState } from "react";
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

const SideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  return (
    <Box width={5}>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <CalendarViewDayIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box width={250} >
          <Typography>
            side bar
          </Typography>
        </Box>

      </Drawer>
    </Box>
  )
};

export default SideBar;