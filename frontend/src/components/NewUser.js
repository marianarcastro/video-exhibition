import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { UserService } from "../services/User.service";
import { Button, FormControl } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const NewUser = () => {
  const {
    setUserId,
    userName,
    setUserName,
    name,
    setName,
    setIsAuth,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    let user = null;
    try {
      user = await UserService.createNewUser(userName, name);
    } catch {
    } finally {
      setUserId(user.user_id);
      setIsAuth(true);
      setTimeout(() => {
        navigate(`/home`);
      }, 200);
    }
  };

  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title>Cadastro de Usuário</Card.Title>
        <Form.Group className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira um nome de usuário"
            value={userName || ""}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira seu nome"
            value={name || ""}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required={true}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Cadastrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewUser;
