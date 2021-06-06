import React from 'react';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { createStyles, makeStyles } from '@material-ui/core';

interface Props {
  title: string, 
  subtitle: string,
  color: string
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: 60, 
      paddingBottom: 60,
      position: 'relative', 
      bottom: -75,
      zIndex: 5
    },
  }),
);

export default function CardService({color, title, subtitle}: Props) {
  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.root} style={{backgroundColor: color,}}>
      <Grid container spacing={2} justify="space-evenly" >
        <Grid item xs={4} md={4}>
          <div style={{textAlign: 'end'}}>
            <AccountBalanceWalletIcon/>
          </div>
        </Grid>
        <Grid item xs={8} md={8}>
          <Typography variant="h5">
            {title}
          </Typography>
          <Typography variant="caption">
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}