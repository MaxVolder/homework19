import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css'; 

const images = [
  'https://thumbs.dfs.ivi.ru/storage29/contents/4/3/a62b7fd9bf8828b0e445494287d19d.jpg/858x483//?q=85',
  'https://i.pinimg.com/236x/54/61/d1/5461d1c381a480884f808ee4ac39ec8e.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFNuGZ_IYLMbTyOrcYvWg33e-zysHX_g7wg&usqp=CAU',
  'https://i.pinimg.com/564x/d3/6d/9b/d36d9b18ae28c79623a5bdb90f183c66.jpg',
  'https://i.pinimg.com/564x/ac/c5/c2/acc5c25d9f5d5baddf77c9c3e253db0d.jpg',
  'https://i.pinimg.com/564x/4e/71/7b/4e717be9c8b32fc0af812f82b7fff1ba.jpg',
  'https://i.pinimg.com/564x/c7/15/0b/c7150b5b26f0a91b5f3f14dd81198a2a.jpg',
  'https://i.pinimg.com/564x/dd/7b/05/dd7b050d88d3d1a4fe254fc94fe3a94c.jpg',
  

  
];

const Photos = () => {
  return (
    <div className="slider-container">
      <Carousel showThumbs={false}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};




export default Photos;
