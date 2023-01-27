import React from 'react'
import Axios from 'axios'
import _ from 'lodash';
import { Placeholder, Container, Grid } from 'semantic-ui-react';

class RoomIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      card_data: [],
    }
  }

  getRooms = async () => (
    (await Axios.get(`api/v1/rooms`)).data
  )

  getCardData = async () => {
    const { gapi } = this.props;
    const rooms = await this.getRooms();
    const current_video_uids = rooms.map(room => room.current_video_uid);
    const thumbnails = await this.getCurrentVideoThumbnails(current_video_uids);
    return (_.zipWith(
      rooms, thumbnails,
      ({playlist_title, room_id, room_name}, thumbnail) => ({
        playlist_title, room_id, room_name, thumbnail,
    }))
    )
  }

  componentDidMount(){
    this.getCardData()
      .then(card_data => {
        this.setState({card_data})
      })
  }

  render(){
    const { card_data } = this.state;
    const cards = card_data
      ? 
      <Placeholder /> : null

    return(
      <Grid fluid textAlign="center" id="room-cards" >
        {cards}
      </Grid>
    )
  }

}

export default RoomIndex