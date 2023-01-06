import React from "react";
import FooterComponente from "../components/Footer";
import Tarjetas from "../components/Tarjetas";

function About() {
    return (
        <>
            <div className="background__image2">

                <div className="nosotros__card">
                    <h1 className="titulo__nosotros">Sobre Nosotros</h1>
                    <br />
                    <hr></hr>
                    <p className="nosotros__texto">Somos una organizacion sin fines de lucro creada por trabajadores para mantener una base de datos de trabajadores subscritos por el reclamo de mantener buenas condiciones laborales y que se respeten los derechos del trabajador, esta organizacion NO defiende bajo ningun medio el uso de violencia u otras actividades conflictivas, la funcion de los trabajadores subscritos es hacer analisis si en sus areas de trabajo se respeta su profesion, convenios y derechos. No estamos ligados bajo ninguna manera a ninguna organizacion politica.</p>

                    <Tarjetas></Tarjetas>

                </div>


                
            </div>
        
            <FooterComponente></FooterComponente>
            
        </>
    )
}

export default About;