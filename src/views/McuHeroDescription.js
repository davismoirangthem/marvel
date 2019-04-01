import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CommonHeader from '../components/CommonHeader';
import mcuController from '../controllers/mcuController';
import '../styles/McuHeroDescription.css';

class McuHeroDescription extends Component{
  constructor(props){
    super(props);
    this.state = {
      character: null
    }
  }

  componentDidMount(){
    try{
      let id = this.props.match.params.id;
      if(id){
        mcuController.getCharacter(id).then(character => {
          this.setState({ character: character });
        }).catch(err => {
          //show dialog box
          console.log(err);
        });
      }
    }
    catch(err){
      console.log('Unable to fetch id: ', err);
    }
  }

  render(){
    return(
      <React.Fragment>
        <CommonHeader title='Marvel Cinematic Universe' />
        <div className='character-description-container'>
          {this.state.character ? (
            <React.Fragment>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
                  <img src={this.state.character.imageUrl} alt='hero image' height='250 px' />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7} xl={8}>
                  <h2>Name: {this.state.character.name}</h2>
                  <h2>Alias: {this.state.character.alias}</h2>
                  <h2>Played By:<a target='_blank' href={`${this.state.character.actorImdbLink}`}> {this.state.character.playedBy}</a></h2>
                  <h2>First Appeared In: {this.state.character.firstAppearedIn}</h2>
                </Grid>
              </Grid>
              <br />
              <Divider variant='middle' />
              <br />
              <h2>Brief Description</h2>
              <p>{this.state.character.description}</p>
              <p><a target='_blank' href={`${this.state.character.marvelUrl}`}>Know More</a></p>
              <Divider variant='middle' />
              <br />
              <h2>MCU Movie Appearances</h2>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Movie Name</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Appearance Type</TableCell>
                    <TableCell>IMDB Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.character.movies.map((movie, key) => (
                    <TableRow key={key}>
                      <TableCell>{movie.name}</TableCell>
                      <TableCell>{movie.year}</TableCell>
                      <TableCell>{movie.appearanceType}</TableCell>
                      <TableCell><a target='_blank' href={`${movie.imdbLink}`}>Visit</a></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </React.Fragment>
          ):(
            <div className='progress-bar'>
              <LinearProgress />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default McuHeroDescription;
