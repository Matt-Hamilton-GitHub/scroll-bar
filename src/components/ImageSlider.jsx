import React from "react";
import styled from "styled-components";
import imagesUrl from "../db/imageUrl";

const ImageSlider = () => {
  return (
    <Wrapper>
      <div className="images">
        {imagesUrl.map((img) => {
          const { id, url } = img;
          return (
            <div className="image">
              <img key={id} src={url} alt={`cat+${id}`} />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ImageSlider;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;

  .images {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;

    overflow-x: auto;
    overscroll-behavior: contain;
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 50px;
  }
  .image {
    scroll-snap-align: start;
  }

  img {
    display: inline-block;
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
`;
