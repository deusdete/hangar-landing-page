import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  mainFeatured: {
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
  subtitle:{
    marginBottom: 18
  },
  text: {
    marginBottom: 20,
    color: '#c2c2c2',
  }
}));

export default function MainFeature() {
  const classes = useStyles();
  return (
    <div className={classes.mainFeatured}>
      <Container maxWidth="md">
        <Grid container spacing={2} justify="center" alignItems="center" style={{minHeight: 500,}}>
          <Grid item xs={12} md={7}>
            <Typography variant="h1">
              Carlos Menezes.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="overline" className={classes.text}>
              - Introduction
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              Product Deseginer and Developer, based in California.
            </Typography>
            <Typography variant="body2" className={classes.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>

            <Link href="#" variant="subtitle1" color="secondary">
              My story
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}