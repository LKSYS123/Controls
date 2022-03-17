import React from "react";
import { Grid, makeStyles} from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Abcd from "./components/Abcd";
import Sample1 from "./pages/Sample1";
import Sample2 from "./pages/Sample2";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Sample3 from "./Sample3";
// import Rutas from "./Rutas";
import PageLayout from "./PageLayout";
import Sample4 from "./Sample4";
import DataGridList from "./pages/DataGridList";
import Openlayer1 from "./pages/Openlayer1";
import OpenlayerPop from "./pages/OpenlayerPop";
import PopupLayer from "./pages/PopupLayer";
import SampleTest1 from "./pages/SampleTest1";
import SampleTest2 from "./pages/SampleTest2";
import SampleTest3 from "./pages/SampleTest3";
import SampleLee1 from "./pages/SampleLee1";
import CustomControls from "./pages/CustomControls";
import ValidationChk from "./pages/ValidationChk";
import FormikSample from "./pages/FormikSample";
import FormikSample2 from "./pages/FormikSample2";
import FloatingMenu from "./pages/FloatingMenu";
import KoreanMap from "./pages/KoreanMap";
import PolygonSwing from "./pages/PolygonSwing";
import PolygonSwingFixed from "./pages/PolygonSwingFixed";
import FormSample1 from "./pages/FormSample1";



import Rutas from "./Rutas";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    // <Router>
      <Routes>
        {/* <Route path="/" element={<Sample3 />} /> */}
        <Route path="/" element={<PageLayout />} >          
          <Route path="/sample1" element={<Sample1 />} />
          <Route path="/DataGridList" element={<DataGridList />} />
          <Route path="/Openlayer1" element={<Openlayer1 />} />
          <Route path="/PolygonSwing" element={<PolygonSwing />} />
          <Route path="/PolygonSwingFixed" element={<PolygonSwingFixed />} />
          <Route path="/FloatingMenu" element={<FloatingMenu />} />
          <Route path="/KoreanMap" element={<KoreanMap />} />
          <Route path="/ValidationChk" element={<ValidationChk />} />
          <Route path="/FormikSample" element={<FormikSample />} />
          <Route path="/FormikSample2" element={<FormikSample2 />} />  
          <Route path="/CustomControls" element={<CustomControls />} />
          <Route path="/FormSample1" element={<FormSample1 />} />
          
          <Route path="/OpenlayerPop" element={<OpenlayerPop />} />
          <Route path="/SampleTest1" element={<SampleTest1 />} />          
          <Route path="/SampleTest2" element={<SampleTest2 />} />          
          <Route path="/SampleTest3" element={<SampleTest3 />} />          

          <Route path="/SampleLee1" element={<SampleLee1 />} />          
        </Route>        
        <Route path="/PopupLayer" element={<PopupLayer />} />
      </Routes>
    // </Router>
      // <Rutas />
      // <div>
      //     <Navbar/>          
      //     {/* <Router exact path="/" component={ Feed } /> */}
      //     {/* <Router path="/abcd" component={Abcd} /> */}
      //     <Grid container="container">
      //         <Grid item="item" sm={2} xs={2}>
      //             <Leftbar/>
      //         </Grid>              
      //         <Grid item="item" sm={10} xs={10}>             
      //           <Rutas />
      //         </Grid>
      //         {/* <Grid item="item" sm={3} className={classes.right}>
      //             <Rightbar/>
      //         </Grid> */}
      //     </Grid>
      //     <Add/>
      // </div>
  );
};

export default App;