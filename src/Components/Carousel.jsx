import { useEffect, useState } from "react";
import Header from "./Header";
import CarouselControl from "./CarouselControl";
import CarouselItems from "./CarouselItems";

function Carousel({carouselData}){

  const[currentIndex,setCurrentIndex]=useState(0);

  // console.log(carouselData,"carrdata")

  useEffect(function(){
    const interval=setInterval(function(){
      setCurrentIndex((prevIndex) => (prevIndex+1) % carouselData.length);
      
      // console.log(currentIndex,"currindex")
    },15000);

    return () => clearInterval(interval)
  },[carouselData.length])


  function prevSlide(){
    // console.log("prevSlide")
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  function nextSlide(){
    // console.log("nextSlide")

    setCurrentIndex((prevIndex) => (prevIndex + 1 ) % carouselData.length);
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>

      <div className="carousel">
        <Header style={{position:"absolute",top:"200px"}}></Header>
        <div className="carousel-inner">
          
          {
            carouselData.map(function(item,index){
              return <CarouselItems key={index} imagePath={item.carouselImagePath} index={index} currentIndex={currentIndex} goToSlide={goToSlide} item={item}></CarouselItems>
            })
          }
        </div>

        <div className="paginationContainer" style={{width:"5%",position:"absolute",top:"0",height:"100%"}}>
          <div className="Pagination2">

            {
                carouselData.map(function(element,index){
                  return <button key={index} className={`dots ${index === currentIndex ? 'active radiuss' : ''}`}
                  onClick={() => goToSlide(index)}
                />

              })
            }

          </div>
        </div>

        <div className="currentPageTotalPage">
            {`${currentIndex+1}/${carouselData.length}`}
        </div>

        <CarouselControl className="buttons" prevSlide={prevSlide} nextSlide={nextSlide}></CarouselControl>
        

      </div>

    </>
  )
}

export default Carousel;