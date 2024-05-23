import Div1 from './Components/Div1'
import Div2 from './Components/Div2'
import Div3 from './Components/Div3'
import Div4 from './Components/Div4'
import Footer from './Components/Footer'
import './App.css'
import './Css/responsive.css'

function App() {
  const contentData = [
    {
      column: 12,
      textClass: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      buttonClass: 3,
      buttonText: 'See More'
    },
    {
      column: 13,
      textClass: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      buttonClass: 5,
      buttonText: 'See More'
    },
    {
      column: 14,
      textClass: 6,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      buttonClass: 7,
      buttonText: 'See More'
    }
  ];

  const imageData = [
    {
        src: 'images/place_your_image_here.jpg',
        alt: '',
        width: 477,
        height: 477
    },
    {
        src: 'images/place_your_image_here1.jpg',
        alt: '',
        width: 477,
        height: 477
    },
    {
        src: 'images/place_your_image_here2.jpg',
        alt: '',
        width: 477,
        height: 477
    }
];
  

  return (
    <>
<div className="background">
        
  <img
    className="place-your-image-here-double-click-to-edit"
    src="images/place_your_image_here_dou.png"
    alt=""
    width={1440}
    height={3547}
  />
  <img
    className="place-your-image-here-double-click-to-edit-2"
    src="images/place_your_image_here_dou_2.png"
    alt=""
    width={1440}
    height={3969}
  />
  <div className="design">
  <Div2 content={contentData}/>
  <Div3/>
  </div>
  <Footer/>
  <Div4 imageData={imageData}/>
  <Div1/>
</div>

    </>
  )
}

export default App
