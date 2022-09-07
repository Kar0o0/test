import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAndPosts } from "../action";
import { Spinner, Button, Card } from "react-bootstrap/";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.usersAndPosts);
  useEffect(() => {
    dispatch(getUsersAndPosts());
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
      {loading ? (
        <Spinner animation="grow" variant="danger" />
      ) : (
        <>
          {data.map((item) => (
            <Card key={item.id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  {item.id}|{item.username}
                </Card.Title>
                <Card.Text>{item.name}</Card.Text>
                <Card.Text>{item.email}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    navigate(item.id.toString(), { state: item.name })
                  }
                >
                  posts
                </Button>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default Users;
