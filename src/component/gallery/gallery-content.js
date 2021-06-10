import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import '../../styles/gallery.scss';



import g1 from '../../images/gallery/g1.jpg';
import g2 from '../../images/gallery/g2.jpg'
import g3 from '../../images/gallery/g3.jpg'
import g4 from '../../images/gallery/g4.jpg'
import g5 from '../../images/gallery/g5.jpg'
import g6 from '../../images/gallery/g6.jpg'
import g7 from '../../images/gallery/g7.jpg'
import g8 from '../../images/gallery/g8.jpg'
import g9 from '../../images/gallery/g9.jpg'
import g10 from '../../images/gallery/g10.jpg'
import b1 from '../../images/Banner/1.jpg';
import b2 from '../../images/Banner/2.jpg';
import b3 from '../../images/Banner/3.jpg';











 
const images= [
b1,b2,b3
];
const album2 = [
  b1,b2,b3
  ];
  const album3 = [
    b1,b2,b3
    ];
    const album4 = [
      b1,b2,b3
      ];



export default class GalleryContent extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (

      <div className="gallery-wrapper">
      <div className="gallery-top">
      <div className="gallery-hr"></div>&nbsp;&nbsp;
            <h2 className="gallery-h2">PHOTOES <span className="span"> GALLERY </span></h2>
            <div className="gallery-hr"></div>
          </div>
          <div className="gallery-content">
      


      <div className="gallery-wrapper">

    <div className="gallery-content">

    <div className="gallery-frist">
        <h5 className="gallery-h5">सिटी नेटको ३८ औं कार्यसमिति बैठक तथा सम्पदा तथा दिगो पर्यटन विषयक अन्तर्राष्ट्रिय सेमिनारको उद्घाटन
           कार्यक्रममा मन्तब्य राख्नु हुदै ललितपुर महानगरपालिकाका प्रमुख चिरीबाबु महर्जन</h5>
          <img src={g2} onClick={() => this.setState({ isOpen: true })} alt="img1" ></img>
        <button type="button" onClick={() => this.setState({ isOpen: true })} className="btn">
          view more
        </button>

        
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
<hr></hr>
</div>







<div className="gallery-frist">
        <h5 className="gallery-h5">सिटी नेटको ३८ औं कार्यसमिति बैठक तथा सम्पदा तथा दिगो पर्यटन विषयक अन्तर्राष्ट्रिय सेमिनारको उद्घाटन
           कार्यक्रममा मन्तब्य राख्नु हुदै ललितपुर महानगरपालिकाका प्रमुख चिरीबाबु महर्जन</h5>
          <img src={g6} onClick={() => this.setState({ isOpen: true })} className="gallery-img" alt="img1"></img>

        <button type="button" onClick={() => this.setState({ isOpen: true })} className="btn">
          view more
        </button>
        
        {isOpen && (
          <Lightbox
            mainSrc={album2[photoIndex]}
            nextSrc={album2[(photoIndex + 1) % album2.length]}
            prevSrc={album2[(photoIndex + album2.length - 1) % album2.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + album2.length - 1) % album2.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % album2.length,
              })
            }
          />
        )}
<hr></hr>
</div>





<div className="gallery-frist">
        <h5 className="gallery-h5">एशिया प्रशान्त क्षेत्रको विभिन्न नगरपालिका र अन्य सरोकारवाला संस्थाहरुको संजाल सिटी नेटको ३८ औं कार्यसमिति बैठक तथा सम्पदा तथा दिगो पर्यटन विषयक सेमिनारको उद्घाटन कार्यक्रममा मन्तब्य राख्नु हुदै सम्माननीय उपराष्ट्रपति नन्द बहादुर पुनज्यू</h5>
          <img src={g4} onClick={() => this.setState({ isOpen: true })} className="gallery-img" alt="img1"></img>

        <button type="button" onClick={() => this.setState({ isOpen: true })} className="btn">
          view more
        </button>
        
        {isOpen && (
          <Lightbox
            mainSrc={album3[photoIndex]}
            nextSrc={album3[(photoIndex + 1) % album3.length]}
            prevSrc={album3[(photoIndex + album3.length - 1) % album3.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + album3.length - 1) % album3.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % album3.length,
              })
            }
          />
        )}
<hr></hr>
</div>
        

<div className="gallery-frist">
        <h5 className="gallery-h5">सिटी नेटको ३८ औं कार्यसमिति बैठक तथा सम्पदा तथा दिगो पर्यटन विषयक अन्तर्राष्ट्रिय सेमिनारको उद्घाटन
           कार्यक्रममा मन्तब्य राख्नु हुदै ललितपुर महानगरपालिकाका प्रमुख चिरीबाबु महर्जन</h5>
          <img src={g5} onClick={() => this.setState({ isOpen: true })} className="gallery-img" alt="img1"></img>
        <button type="button" onClick={() => this.setState({ isOpen: true })} className="btn">
          view more
        </button>
        
        {isOpen && (
          <Lightbox
            mainSrc={album4[photoIndex]}
            nextSrc={album4[(photoIndex + 1) % album4.length]}
            prevSrc={album4[(photoIndex + album4.length - 1) % album4.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + album4.length - 1) % album4.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % album4.length,
              })
            }
          />
        )}
<hr></hr>
</div>

    </div>
      
    </div>

</div>


      </div>
    );
  }
}