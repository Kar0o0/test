import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAndPosts } from "../action";
import { Spinner, Button, Card, Badge } from "react-bootstrap/";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {state} = useLocation();
  const { userID } = useParams();
  const { data, loading, error } = useSelector((state) => state.usersAndPosts);
  useEffect(() => {
    dispatch(getUsersAndPosts(userID));
  }, []);
  
  return (
    <>
      {loading ? (
        <Spinner animation="grow" variant="danger" />
      ) : (
        <>
          <Badge bg="danger" style={{fontSize:"32px"}}>{state}</Badge>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}
          >
            {data.map((item) => (
              <Card key={item.id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text>{item.title}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate(item.id.toString(), { state: item.id })}
                  >
                    comments
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Posts;
