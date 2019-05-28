import React from "react";
import TitleUnderline from "../../components/TitleUnderline/";
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

function ViewMore(props){
	const { title, button, children, center } = props;
  
  const containerProps = center ? {
    justify:"center",
    direction:"column",
    alignItems:"center"
  } : {}

  return(
    <div className="ViewMore">
			{
        title ? <TitleUnderline text={title}/> : null
      }
      <div className="ViewMoreArea">
	      {children}
      </div>
      <Grid container spacing={24} {...containerProps}>
        <Grid item xs={6}>
          <Fab variant="extended" color="primary" aria-label="See all">{button}</Fab>
        </Grid>
      </Grid>
    </div>
  )
}

export default ViewMore;
