function Card({cardItem}){

  // console.log(cardItem,"carouselCards")
  return(
    <>
      <div className="cardBackgroundColor">
          
        <div className="card mt ps pe">
          <div className="img">
            <div className="cardTitle pt font-gradient">{cardItem.cardTitle}</div>
            <p className="pt font-gradient">{cardItem.cardContent}</p>
          </div>
        </div>
      </div>
      
    </>
  )
}
export default Card;