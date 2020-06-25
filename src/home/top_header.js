import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow:0.1,
  },
  number:{
    flexGrow:0.1,
  },
  langue:
  {
    flexGrow: 0.1,
  }
}));

export default function Top_header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
      
 
          <Typography variant="h6" className={classes.title}>
          <Button>
         Home
      </Button>
            
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Button variant="" color="">
          Dailary
      </Button>
            
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Button variant="" color="white">
          Payment
      </Button>
            
          </Typography>
          <Typography style={{ marginLeft:750  }} variant="h6" className={classes.number}>
            +01794895700
          </Typography>
          <Typography variant="h6" className={classes.langue}>
            Payment
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
