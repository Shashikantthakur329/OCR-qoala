import React from 'react';
import { Link} from "react-router-dom";
import Home from '../Home'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../App.css'

const Header = () => {
  return (
    <>
    <AppBar  className='header'>
      <Toolbar className='leftHeader'>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          OCR READER
        </Typography>
        <div className='rightHeader'>
            <Button className='button'><Link to="/" className='btnLink'><h6>HOME</h6></Link></Button>
            <Button className='button'><Link to="/FileUpload" className='btnLink'><h6>UPLOAD FILE</h6></Link></Button>
            <Button className='button'><Link to="/" className='btnLink'><h6>CHECK HISTORY</h6></Link></Button>
        </div>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Header;
