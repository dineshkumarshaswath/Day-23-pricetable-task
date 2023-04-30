import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Check, X } from 'react-bootstrap-icons'

function App() {
  return (
    <div className='App' >
      <Pricetable />
    </div>

  )
}




function Pricetable() {

  return (
    <div className='Pricetable'>
      <Container className='container'>
      <Row>
          <Col>
          <Card className='card' style={{ width: '18rem' }}>

            <Card.Body className='card-body' >
              <div className='text'>
                <p><span><b className='top'>FREE</b></span></p>
                <Card.Title><h1>$0<span className='period' >/month</span></h1></Card.Title>
              </div>
              <hr></hr>
              <Card.Text><Check size={25} />
                Single User
      </Card.Text>
              <Card.Text><Check size={25} />
                5GB Storage
              </Card.Text>
              <Card.Text><Check size={25} />
                Unlimited Public Projects
              </Card.Text>
              <Card.Text><Check size={25} />
                Community Access
              </Card.Text>
              <div className='card1'>
                <Card.Text><X size={25} />
                  Unlimited Private Projects
                </Card.Text>
                <Card.Text><X size={25} />
                  Dedicated Phone Support
                </Card.Text>
                <Card.Text><X size={25} />
                  Free Subdomain
                </Card.Text>
                <Card.Text><X size={25} />
                  Monthly status Reports
                </Card.Text>
              </div>
              <Button className='button b1' variant="primary"><strong>Button</strong></Button>
    </Card.Body>
  </Card> </Col>
  <Col><Card className='card' style={{ width: '18rem' }}>

<Card.Body className='card-body' >
  <div className='text'>
    <p><span><b className='top'>PLUS</b></span></p>
    <Card.Title><h1>$9<span className='period' >/month</span></h1></Card.Title>
  </div>
  <hr></hr>
  <Card.Text><Check size={25} />
    <b>5 Users</b>
</Card.Text>
  <Card.Text><Check size={25} />
    50GB Storage
  </Card.Text>
  <Card.Text><Check size={25} />
    Unlimited Public Projects
  </Card.Text>
  <Card.Text><Check size={25} />
    Community Access
  </Card.Text>
 
    <Card.Text><Check size={25} />
      Unlimited Private Projects
    </Card.Text>
    <Card.Text><Check size={25} />
      Dedicated Phone Support
    </Card.Text>
    <Card.Text><Check size={25} />
      Free Subdomain
    </Card.Text>
    <div className='card2'>
    <Card.Text><X size={25} />
      Monthly status Reports
    </Card.Text>
  </div>
  <Button className='button b2' variant="primary"><strong>Button</strong></Button>
</Card.Body>
</Card> </Col>
<Col><Card className='card' style={{ width: '18rem' }}>

<Card.Body className='card-body' >
  <div className='text'>
    <p><span><b className='top'>PRO</b></span></p>
    <Card.Title><h1>$49<span className='period' >/month</span></h1></Card.Title>
  </div>
  <hr></hr>
  <Card.Text><Check size={25} />
   <b> Unlimited Users</b>
</Card.Text>
  <Card.Text><Check size={25} />
    150GB Storage
  </Card.Text>
  <Card.Text><Check size={25} />
    Unlimited Public Projects
  </Card.Text>
  <Card.Text><Check size={25} />
    Community Access
  </Card.Text>
  
    <Card.Text><Check size={25} />
      Unlimited Private Projects
    </Card.Text>
    <Card.Text><Check size={25} />
      Dedicated Phone Support
    </Card.Text>
    <Card.Text><Check size={25}/>
      <b> Unlimited</b> Free Subdomains
    </Card.Text>
    <Card.Text><Check size={25} />
      Monthly status Reports
    </Card.Text>

  <Button className='button' variant="primary"><strong>Button</strong></Button>
</Card.Body>
</Card> </Col>
      </Row>
    </Container>
    </div>
    
  );
}

export default App;

