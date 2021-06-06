import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container'
import Partners from '../Partners';

import Image from 'next/image'

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
  subtitle: {
    marginBottom: 18
  },
  text: {
    marginBottom: 20,
    color: '#c2c2c2',
  },
  imageContainer: {
    marginBottom: 75
  }
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.mainFeatured} id="works">
      <Container maxWidth="md">
        <Partners />
        <Grid container spacing={2} justify="space-between" >
          <Grid item xs={12} md={5}>
            <Typography variant="overline" className={classes.text}>
              - Portfolio
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              All Creative Works, Selected projects.
            </Typography>
            <Typography variant="body2" className={classes.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </Typography>

            <Link href="#" variant="subtitle1" color="secondary">
              Explore more
            </Link>

            <div className={classes.imageContainer} style={{ marginTop: 75 }}>
              <Link href="#">
                <Image src="/images/portfolio/malte-schmidt-enGr5YbjQKQ-unsplash.jpg" width={400} height={550} layout="intrinsic" />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className={classes.imageContainer} style={{ marginTop: 75 }}>
              <Link href="#">
                <Image src="/images/portfolio/matthew-reyes--C-jTjc0g7I-unsplash.jpg" width={400} height={550} layout="intrinsic" />
              </Link>
            </div>
            <div className={classes.imageContainer} style={{ marginTop: 75 }}>
              <Link href="#">
                <Image src="/images/portfolio/tech-daily-R3KpH1W4Deo-unsplash.jpg" width={400} height={550} layout="intrinsic" />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}