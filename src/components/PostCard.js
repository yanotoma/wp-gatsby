import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const PosrCardStyles = styled.article`
  position: relative;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  small {
    font-size: 0.7rem;
    font-weight: 100;
    padding: 0.5rem;
    display: block;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background: black;
  }

  .post-image {
    height: 250px;
  }
`;

const PostCard = ({ title, image, link, date }) => {
  const postImage = getImage(image);

  return (
    <PosrCardStyles>
      <Link to={link}>
        {!!postImage ? (
          <GatsbyImage className="post-image" image={postImage} alt={title} />
        ) : null}
        <div>
          <small>{date}</small>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      </Link>
    </PosrCardStyles>
  );
};

export default PostCard;
