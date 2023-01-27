import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { RoomService } from "../services/Room.service";
import { Button, FormControl } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Home = () => {
  const { userId, userName, room, setRoom, setVideo, url, setUrl } = useContext(
    GlobalContext
  );

  const [inputRoom, setInputRoom] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    let roomSaved = null;
    try {
      roomSaved = (await RoomService.createNewRoom(inputRoom, userId, inputUrl)).data;
    } catch {
    } finally {
      setRoom(roomSaved.name);
      setUrl(inputUrl);
      setVideo(true);
      setTimeout(() => {
        navigate(`/rooms/${roomSaved.id}`);
      }, 200);
    }
  };

  return (
    <Card>
      <Card.Body className="text-center card-body">
        <Card.Title>Usuário logado: {userName}</Card.Title>
        <Form.Group className="mb-3">
          <Form.Label className="mb-3">Nova Sala Virtual: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira um nome de para a sala"
            value={inputRoom || ""}
            onChange={(event) => {
                setInputRoom(event.target.value);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mb-3">Link do Youtube</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira um link do Youtube"
            value={inputUrl || ""}
            onChange={(event) => {
                setInputUrl(event.target.value);
            }}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Cadastrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Home;
