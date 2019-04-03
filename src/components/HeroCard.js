import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/Card.scss';

class HeroCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadImage: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadImage: true })
    }, 500)
  }
  goToDescription = () => {
    this.props.history.push(`/mcu/character/${this.props.character.id}`);
  }

  render(){
    return(
      <Card className="card-container" onClick={this.goToDescription} raised={true}>
        <CardActionArea>
          {this.state.loadImage ? (
            <CardMedia
            className="card-media"
            image={this.props.character.imageUrl}
          />
          ) : (
            <div className="card-media">
              <CircularProgress />
            </div>
          )}
          <CardContent className="card_content">
            <Typography gutterBottom variant="h5" component="h1">
              {this.props.character.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default HeroCard;
