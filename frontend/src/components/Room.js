import React, { useState, useContext } from "react";
import _ from "lodash";
import Youtube from "./Youtube";
import { GlobalContext } from "../context/GlobalContext";
import { Button, FormControl } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Room = () => {
  const { room, url } = useContext(GlobalContext);
  
  return (
    <Card>
      <Card.Header>{room}</Card.Header>
      <Youtube youtubeLink={url} />
    </Card>

  );
};

export default Room;
