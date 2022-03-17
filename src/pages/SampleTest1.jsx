import React from "react";
import { Container, makeStyles} from "@material-ui/core";
import { Routes, Route, Outlet } from "react-router-dom";
// import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const Sample1 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
    <div>
Sample test 111111<br/>
Sample test 111111<br/>
Sample test 111111<br/>
    </div>

    
    </Container>
  );
};

export default Sample1;