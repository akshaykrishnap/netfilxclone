import 'bootstrap/dist/css/bootstrap.min.css';
import './Icons.css'
import Card from 'react-bootstrap/Card';
import React from 'react'
import marvel from './images/marvel.png'
import Hotstar from './images/Hotstar.png'
import d2 from './images/d2.png'
import n1 from './images/n1.png'
import p1 from './images/p1.png'

function Icon() {
  return (
    <>
    <div id='cardbody' className='d-flex m-2'>

    <Card  className='imgbody'>
      <Card.Body>
        <img className='imgbody1' src={d2} alt="" />
      </Card.Body>
    </Card>
    <Card className='imgbody'>
      <Card.Body>
        <img  className='imgbody1' src={p1}  alt="" />
      </Card.Body>
    </Card>
    <Card className='imgbody'>
      <Card.Body>
      <img  className='imgbody1' src={marvel} alt="" />
      </Card.Body>
    </Card>
    <Card className='imgbody'>
      <Card.Body>
      <img  className='imgbody1' src={n1}  alt="" />
      </Card.Body>
    </Card>
    <Card className='imgbody'>
      <Card.Body>
      <img  className='imgbody1' src={Hotstar}  alt="" />
      </Card.Body>
    </Card>

    </div>
    
    </>
  )
}

export default Icon