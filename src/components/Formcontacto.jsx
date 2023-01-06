import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Formulario() {
    return (
        <>
          
    <div className="section__contact">
        <div className="form__div">


            <Form className='mx auto'>
                <Form.Group className=" p-2" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                        tu informacion es totalmente privada y no será compartida
                    </Form.Text>
                </Form.Group>

                <Form.Group className=" p-2" controlId="formBasicPassword">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control type="password" placeholder="Mensaje" />

                </Form.Group>
                <Button className=" m-5" variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>

        </div>

        <div className="map__frame">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5522.916013019019!2d-58.378882032387686!3d-34.60553938835895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf173150fb%3A0x591a909a423087d4!2sMcDonald&#39;s!5e0!3m2!1ses-419!2sar!4v1672889230929!5m2!1ses-419!2sar" width="600" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
            </div>
        </>
        
    );
}

export default Formulario;