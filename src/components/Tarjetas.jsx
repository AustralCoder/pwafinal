import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function Tarjetas() {
    return (
        <div className="tarjetas__container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://wallpapercave.com/wp/wp3627349.jpg" />
                <Card.Body>
                    <Card.Title className="tarjeta__texto">Asociacion</Card.Title>
                    <Card.Text className="tarjeta__texto">
                        Nos asociamos para asegurar condiciones dignas de trabajo y respeto por el laburante
                    </Card.Text>
                    <NavLink to="/"> <Button variant="primary">Registrarse</Button></NavLink>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://wallpapercave.com/wp/wp1823989.jpg" />
                <Card.Body>
                    <Card.Title className="tarjeta__texto">Hermandad</Card.Title>
                    <Card.Text className="tarjeta__texto">
                        Entre trabajadores ayudarnos para seguir adelante entre todos nosotros por un futuro mejor
                    </Card.Text>
                    <NavLink to="/"> <Button variant="primary">Registrarse</Button></NavLink>
                </Card.Body>
            </Card>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPl-WttwjFoZflzWya8suyXGesUMGDuWpVGg&usqp=CAU" />
                <Card.Body>
                    <Card.Title className="tarjeta__texto">Compromiso</Card.Title>
                    <Card.Text className="tarjeta__texto">
                    Nos comprometemos a asegurar mejor afinidad entre los trabajadores
                    </Card.Text>
                    <NavLink to="/"> <Button variant="primary">Registrarse</Button></NavLink>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Tarjetas;