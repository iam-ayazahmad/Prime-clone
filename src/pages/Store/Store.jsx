import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Store.css"

import Slider from "react-slick";
import { Link } from "react-router-dom";


export const Store=()=>{
    const renderSlides = () =>
   [{ img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Morbius_TVOD/f2243ea4-043a-4228-b253-48502f172db0._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Runway34_Rent199/4b9f813e-1447-4557-b612-d9d30f9671de._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Sonic2/615d993d-d50a-4cc9-84bf-6d91628a32f3._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSOD/ce02ee71-2928-4f4b-8b9c-e5658c48145f._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Batman_Revised/200d46a3-a1b9-48bd-889d-23fe4d570a0b._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Uncharted/90097e63-ec24-4589-a7d6-922e413ca5c9._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_VenomLetThereBeCarnage/53ac5367-24d7-4ee5-b799-a9cfca515ee9._UR3000,600_SX1500_FMwebp_.jpeg"},
    
    ].map(num => (

      <div className="my1slides">
        <img className="proimg" src={num.img} alt="" />
        
      </div>
    ));

  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? ">" : "<";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }






  const renderSlides2 = () =>
   [ { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSOD/ce02ee71-2928-4f4b-8b9c-e5658c48145f._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Batman_Revised/200d46a3-a1b9-48bd-889d-23fe4d570a0b._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Uncharted/90097e63-ec24-4589-a7d6-922e413ca5c9._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_VenomLetThereBeCarnage/53ac5367-24d7-4ee5-b799-a9cfca515ee9._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Morbius_TVOD/f2243ea4-043a-4228-b253-48502f172db0._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Runway34_Rent199/4b9f813e-1447-4557-b612-d9d30f9671de._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Sonic2/615d993d-d50a-4cc9-84bf-6d91628a32f3._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX1500_FMwebp_.jpeg"},
   ,
    
    ].map(num => (

      <div className="my1slides">
        <img className="proimg" src={num.img} alt="" />
        
      </div>
    ));

  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? ">" : "<";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }




  
  const renderSlides3 = () =>
   [ 
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Uncharted/90097e63-ec24-4589-a7d6-922e413ca5c9._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_VenomLetThereBeCarnage/53ac5367-24d7-4ee5-b799-a9cfca515ee9._UR3000,600_SX1500_FMwebp_.jpeg"},{ img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSOD/ce02ee71-2928-4f4b-8b9c-e5658c48145f._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Batman_Revised/200d46a3-a1b9-48bd-889d-23fe4d570a0b._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Sonic2/615d993d-d50a-4cc9-84bf-6d91628a32f3._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Morbius_TVOD/f2243ea4-043a-4228-b253-48502f172db0._UR3000,600_SX1500_FMwebp_.jpeg"},
    { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Runway34_Rent199/4b9f813e-1447-4557-b612-d9d30f9671de._UR3000,600_SX1500_FMwebp_.jpeg"},
    
   ,
    
    ].map(num => (

      <div className="my1slides">
        <img className="proimg" src={num.img} alt="" />
        
      </div>
    ));

  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? ">" : "<";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }



  
  const renderSlides4 = () =>
   [  { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Morbius_TVOD/f2243ea4-043a-4228-b253-48502f172db0._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Runway34_Rent199/4b9f813e-1447-4557-b612-d9d30f9671de._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Sonic2/615d993d-d50a-4cc9-84bf-6d91628a32f3._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX1500_FMwebp_.jpeg"},{ img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSOD/ce02ee71-2928-4f4b-8b9c-e5658c48145f._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Batman_Revised/200d46a3-a1b9-48bd-889d-23fe4d570a0b._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Uncharted/90097e63-ec24-4589-a7d6-922e413ca5c9._UR3000,600_SX1500_FMwebp_.jpeg"},
   { img: "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_VenomLetThereBeCarnage/53ac5367-24d7-4ee5-b799-a9cfca515ee9._UR3000,600_SX1500_FMwebp_.jpeg"},
   
   ,
    
    ].map(num => (

      <div className="my1slides">
        <img className="proimg" src={num.img} alt="" />
        
      </div>
    ));

  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? ">" : "<";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

  return (
    <div className="masterslide">
      <div className="myApp">
        
        <Slider
        

          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
          dots={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={false}
          
        >
          {renderSlides()}
        </Slider>
        
        
      </div>




    <div className="slidecontainer">
      <p><span>RENT </span><span>New release movies 
</span>
<span style={{color:"#72b2f0"}}> See more</span></p>
      <div className="myApp2">
        
        <Slider

          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
          dots={true}
          slidesToShow={4}
          slidesToScroll={4}
          autoplay={false}
          
        >
          {renderSlides2()}
        </Slider>
        
        </div>
      </div>






      <div className="slidecontainer">
      <p><span>RENT </span><span>New release movies 
</span>
<span style={{color:"#72b2f0"}}> See more</span></p>
      <div className="myApp2">
        
        <Slider

          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
          dots={true}
          slidesToShow={4}
          slidesToScroll={4}
          autoplay={false}
          
        >
          {renderSlides3()}
        </Slider>
        
        </div>
      </div>






      <div className="slidecontainer">
      <p><span>RENT </span><span>New release movies 
</span>
<span style={{color:"#72b2f0"}}> See more</span></p>
      <div className="myApp2">
        
        <Slider

          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
          dots={true}
          slidesToShow={4}
          slidesToScroll={4}
          autoplay={false}
          
        >
          {renderSlides4()}
        </Slider>
        
        </div>
      </div>
      
    </div>
  );
}


