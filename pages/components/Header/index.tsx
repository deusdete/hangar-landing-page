import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      padding: 10,
    }
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed"  >
      <Container maxWidth="md">
        <Toolbar>
        <div className={classes.title}>
          <Typography>
            Hangar
          </Typography>
          {/* <img src="/vercel.svg" width={75} />   */}
        </div>
        <div>
          <Typography>
            <Link 
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-250}
              duration={500}
              color="inherit" 
              className={classes.link} >
              Services
            </Link>
            <Link 
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-250}
              duration={500}
              color="inherit" 
              className={classes.link}>
              Works
            </Link>
            <Link 
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-250}
              duration={500}
              color="inherit" 
              className={classes.link}>
              Blog
            </Link>
          </Typography>
        </div>
      </Toolbar>
      </Container>
    
  </AppBar>
  )
}