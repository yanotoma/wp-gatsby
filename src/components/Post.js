import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Post = ({ title, excerpt, image, readMore }) => {
  const gatsbyImage = getImage(image);

  return (
    <article>
      <div className="p-3">
        <Card>
          <Card.Img
            variant="top"
            as={GatsbyImage}
            image={gatsbyImage}
            alt={title}
          />
          <Card.Body>
            <Card.Title
              dangerouslySetInnerHTML={{ __html: title }}
            ></Card.Title>
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Card.Text>
            <Button variant="warning" as={Link} to={readMore}>
              Read more ...
            </Button>
          </Card.Body>
        </Card>
      </div>
    </article>
  );
};

export default Post;
