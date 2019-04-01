import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

class McuAddHero extends Component{
  constructor(props){
    super(props);
    this.state = {
      moviesList: [
        { name: 'sample', year: 2019 },
        { name: 'sample', year: 2019 },
        { name: 'sample', year: 2019 },
        { name: 'sample', year: 2019 },
        { name: 'sample', year: 2019 }
      ]
    }
  }

  render(){
    return(
      <div className='add-hero-container'>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField id="name" label="Name" type="text" name="name" margin="dense" variant="outlined" fullWidth={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField id="alias" label="Alias" type="text" name="alias" margin="dense" variant="outlined" fullWidth={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField id="firstAppearedIn" label="First Appeared In" type="number" name="firstAppearedIn" margin="dense" variant="outlined" fullWidth={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField id="actor" label="Actor Name" type="text" name="actor" margin="dense" variant="outlined" fullWidth={true}  />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField id="description" label="Brief Description" type="text" name="actor" margin="dense" variant="outlined" fullWidth={true} multiline={true} rows={7} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField id="createdBy" label="Created By" type="text" name="createdBy" margin="dense" variant="outlined" fullWidth={true} />
          </Grid>
        </Grid>
        <br />
        <Divider variant="middle" />
        <br />
        <center>
          <React.Fragment>
            {this.state.moviesList.map((movie,key) => {
              return (
                <React.Fragment key={key}>
                  <Chip label={`${movie.name} - ${movie.year}`} onDelete={() => alert('Delete')} />{' '}
                </React.Fragment>
              )
            })}
          </React.Fragment>
          <h4>Movies List - Enter the Movies in the MCU this Hero has appeared in</h4>
          <TextField id="name" label="Movie Name" type="text" name="name" margin="normal" variant="outlined" />{' '}
          <TextField id="year" label="Movie Year" type="number" name="year" margin="normal" variant="outlined" />
          <p><Button variant='contained' color='primary'>Add</Button></p>
        </center>
      </div>
    );
  }
}

export default McuAddHero;
