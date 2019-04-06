import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import OpenInNew from '@material-ui/icons/OpenInNew';
import CommonHeader from '../components/CommonHeader';
import CommonFooter from '../components/CommonFooter';
import mcuController from '../controllers/mcuController';
import { isMobile } from '../helpers/Generic';
import '../styles/McuHeroDescription.scss';

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
        <CommonHeader title='Marvel Cinematic Universe' history={this.props.history} pageType="DESC"/>
        <div className='character-description-container'>
          {this.state.character ? (
            <React.Fragment>
              <div className="desc_header">
                <p className="bg_name">{this.state.character.name}</p>
                <Grid container spacing={40} className="max-width char-info">
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="image_container">
                      <img src={this.state.character.imageUrl} alt='hero_image' className="char_img" />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="hero_desc">
                    <p className="desc_header_heading">Name: <span>{this.state.character.name}</span></p>
                    <p className="desc_header_heading">Alias: <span>{this.state.character.alias}</span></p>
                    <p className="desc_header_heading">Played By:{" "}
                      <span>
                        <a target='_blank' rel="noopener noreferrer" href={`${this.state.character.actorImdbLink}`}>{this.state.character.playedBy}</a>
                      </span>
                    </p>
                    <p className="desc_header_heading">First Appeared In: <span>{this.state.character.firstAppearedIn}</span></p>
                  </Grid>
                </Grid>
              </div>

              <div className="max-width desc_info">
              <h2 className="mcu_appearance_heading">What we know  about {this.state.character.name}</h2>
              <p className="char_detailed_desc">{this.state.character.description}
                <br />
                <a target='_blank' rel="noopener noreferrer" href={`${this.state.character.marvelUrl}`}>Know More</a>
              </p>
              <Divider variant='middle' className="desc_divider"/>
              <h2 className="mcu_appearance_heading">MCU Movie Appearances</h2>
              {!isMobile() ?
                (<Table className="char_table">
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
                        <TableCell><a target='_blank' rel="noopener noreferrer" href={`${movie.imdbLink}`}>Visit</a></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>)
                :
                (
                  <List className="list">
                    {this.state.character.movies.map((movie, key) => (
                    <ListItem className="list_item" key={key}>
                      <ListItemText
                        primary={movie.name}
                        secondary={
                          <React.Fragment>
                            {`As ${movie.appearanceType} in ${movie.year}`}
                          </React.Fragment>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <a target='_blank' rel="noopener noreferrer" href={`${movie.imdbLink}`}>
                            <OpenInNew />
                          </a>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                  </List>
                )
              }
              </div>
              <CommonFooter />
            </React.Fragment>
          ):(
            <div className='progress-bar'>
              <CircularProgress />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default McuHeroDescription;
