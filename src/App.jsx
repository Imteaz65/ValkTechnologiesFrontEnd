import Carousel from "./Components/Carousel"
import Header from "./Components/Header"


function App() {

  // src="../../src/assets/Photos/photo1.jpg" alt="npPhoto"
  const CarouselData=[
    {
      carouselImagePath:"../../src/assets/Photos/photo1.jpg",
      carouselCards:[ 
        {cardTitle:"Title1",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title2",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title1",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
      ]
    },
    {
      carouselImagePath:"../../src/assets/Photos/photo2.jpg",
      carouselCards:[ 
        {cardTitle:"Title2.1",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title2.2",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title2.3",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title2.4",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },

      ]
    },
    {
      carouselImagePath:"../../src/assets/Photos/photo3.jpg",
      carouselCards:[ 
        {cardTitle:"Title3.1",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title3.2",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title3.3",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
      ]
    },
    {
      carouselImagePath:"../../src/assets/Photos/photo4.jpg",
      carouselCards:[ 
        {cardTitle:"Title4.1",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title4.2",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title4.3",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title4.4",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
      ]
    },
    {
      carouselImagePath:"../../src/assets/Photos/photo5.jpg",
      carouselCards:[ 
        {cardTitle:"Title5.1",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title5.2",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title5.3",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title5.4",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title5.5",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title5.6",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        
      ]
    },
    {
      carouselImagePath:"../../src/assets/Photos/photo6.jpg",
      carouselCards:[ 
        {cardTitle:"Title5.1",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title5.2",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title5.3",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title5.4",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        {cardTitle:"Title5.5",
        cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, debitis. Sint, quos cupiditate! Explicabo laborum assumenda perferendis possimus temporibus consequatur?",
        cardPhotoPath:"",
        },
        
      ]
    }
  ]

  

  return (
    <>
      <Header></Header>
      <Carousel carouselData={CarouselData}></Carousel>
    </>
  )
}

export default App
