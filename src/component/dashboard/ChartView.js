import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import HealthStatus from "../charts/CowHealthChart";
import CowCount from "../charts/CowCountChart";
import MilkChart from "../charts/MilkChart";
import ProductStatusChart from "../charts/ProductStatusChart";
import MilkBarChar from "../charts/MilkBarChart";
import FarmChart from "../charts/FarmStatusChart";
import { minHeight } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: "auto",
    height: "100%",
    width: "100%",
    minWidth: 380
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid item>
            <Paper className={classes.paper}>
              <HealthStatus />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <CowCount />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <MilkChart />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <ProductStatusChart />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <MilkBarChar />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <FarmChart />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
