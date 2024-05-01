import Card from "./Card";
import Overview from "./Overview";
import image1 from '../assets/Photos/photo1.jpg'

function CarouselItems({index,currentIndex,goToSlide,imagePath,item}){

  return(
    <>
      <div className={`carousel-item ${index===currentIndex ? 'active':''}`}>
                    
        <img src={imagePath} alt="noImage" />

        <div className="navbar">
        </div>

        <Overview></Overview>

        <div className="carousel-container">
          {
            item.carouselCards.map(function(cardItem,index){
              return <Card key={index} cardItem={cardItem} goToSlide={goToSlide}></Card>
            })
          }
        </div>                 
                    
      </div>
    </>
  )
}
export default CarouselItems;