// import cerveceria1 from "../assets/images/logo/DSC_0005.jpg"
// import cerveceria2 from '../assets/images/logo/DSC_0007.jpg'
// import cerveceria3 from '../assets/images/logo/DSC_0014.jpg'
// import cerveceria4 from '../assets/images/logo/DSC_0030.jpg'
import GnHomeCard from '../components/GnHomeCard'
import '../StyleSheets/GnAbout.css'

function GnAbout() {
    return (
        <section className="pd-quienes-somos-area">

            <div className="pd-quienes-somos-right">
                {/* <div className="slider qs-img-container">
                    <ul>
                        <li><img src={cerveceria1} alt="slider1" className="slider-img" /></li>
                        <li><img src={cerveceria2} alt="slider2" className="slider-img" /></li>
                        <li><img src={cerveceria3} alt="slider3" className="slider-img" /></li>
                        <li><img src={cerveceria4} alt="slider4" className="slider-img" /></li>
                    </ul>
                </div> */}
                <div>
                    <h6>Nosotros</h6>
                    <p>Somos un grupo de amigos del conurbano sur bonaerense. Nos proponemos elaborar profesionalmente una variedad de cervezas artesanales amigables al paladar local combinada con sabores nuevos y propios, brindado un servicio de entrega para hacer llegar el producto final a los consumidores de manera cómoda y eficiente.</p>
                </div>
            </div>

            <div className="pd-quienes-somos-left">
                {/* <div className="slider qs-img-container">
                    <ul>
                    <li><img src={cerveceria1} alt="image-slider" className="slider-img" /></li>
                    <li><img src={cerveceria2} alt="image-slider" className="slider-img" /></li>
                    <li><img src={cerveceria3} alt="image-slider" className="slider-img" /></li>
                    <li><img src={cerveceria4} alt="image-slider" className="slider-img" /></li>
                    </ul>
                </div> */}
                <div>
                    <h6>La cervecería</h6>
                    <p>CHEC es una cervecería artesanal gestada por un grupo de amigos en Gerli, Provincia de Buenos Aires.
                        Nació como un juego entre hermanos, pero rápidamente se convirtió en un lindo emprendimiento comercial.
                        Cervezas Hechas En Casa, con Calidad.</p>
                    <p>¡Una rica selecección de variedades para compartir con vos!</p>
                </div>
                </div>
               
               <div>

                <GnHomeCard
                title= " Asi es Chec: "
                line1= " Riquísima"
                line2= " Comprometida con la Calidad"
                line3= " De Gerli directo a vos"
                line4= {<strong><em>¡Disfrutala bien fria!</em> </strong>}
                />
                </div>

        </section>


        
        );

       
     
  }
  
  export default GnAbout;