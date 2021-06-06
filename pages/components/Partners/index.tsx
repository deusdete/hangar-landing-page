import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: '#3c096c',
    color: theme.palette.common.white,
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  subtitle: {
    marginBottom: 18
  },
  text: {
    marginBottom: 20,
    color: '#c2c2c2',
  }
}));

const images = [
  '/images/partners/ibm-logo.png',
  '/images/partners/ibm-logo.png',
  '/images/partners/ibm-logo.png',
  '/images/partners/ibm-logo.png',
  '/images/partners/ibm-logo.png',
  '/images/partners/ibm-logo.png'
]


export default function Partners() {
  const classes = useStyles()
  return (
    <div className={classes.root} style={{paddingTop: 150, marginBottom: 30}}>
      <Grid container spacing={2} justify="center">
          {images.map(image => (
            <Grid item xs={6} md={3}>
              <div style={{padding: 10}}>
                <img src={image} />
              </div>
            </Grid>
          ))}
        </Grid>
    </div>
  )
}