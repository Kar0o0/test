import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getComments } from "../action";
import { Spinner, Card, Badge } from "react-bootstrap/";

const Comments = () => {
  const dispatch = useDispatch();
  const { postID } = useParams();
  const { state } = useLocation();
  const { data, loading, error } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(getComments(postID));
  }, []);
  return (
    <>
      {loading ? (
        <Spinner animation="grow" variant="danger" />
      ) : (
        <>
          <Badge bg="danger" style={{ fontSize: "32px" }}>
            {state}
          </Badge>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}
          >
            {data.map((item) => (
              <Card key={item.id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item.id}</Card.Title>
                  <Card.Text>{item.email}</Card.Text>
                  <Card.Text>{item.name}</Card.Text>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default Comments;
