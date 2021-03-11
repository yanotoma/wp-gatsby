import { Link } from 'gatsby';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Post = ({ title, excerpt, image, readMore }) => {
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: title }}></Card.Title>
          <Card.Text dangerouslySetInnerHTML={{ __html: excerpt }}></Card.Text>
          <Button variant="primary" as={Link} to={readMore}>
            Read more ...
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
