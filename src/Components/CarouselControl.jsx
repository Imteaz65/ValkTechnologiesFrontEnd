function CarouselControl({prevSlide,nextSlide}){

  return(
    <>
      <div className="buttons">
        <button className="next" onClick={()=>{prevSlide()}}>
            prev
        </button>
        <button className="previous" onClick={()=>{nextSlide()}}>
            next
        </button>
      </div>
      
    </>
  )
}
export default CarouselControl;