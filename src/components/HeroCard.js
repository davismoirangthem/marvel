import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ironmancard from '../images/ironmancard.jpg';
import '../styles/Card.css';

class HeroCard extends Component{
  goToDescription = () => {
    this.props.history.push(`/mcu-hero/${this.props.hero.id}`);
  }

  render(){
    return(
      <Card className="card-container" onClick={this.goToDescription}>
        <CardActionArea>
          <CardMedia
            className="card-media"
            image={ironmancard}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {this.props.hero.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default HeroCard;
