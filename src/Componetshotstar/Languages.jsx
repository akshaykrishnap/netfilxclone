import './Languages.css'
import React from 'react'
import Card from 'react-bootstrap/Card';
import c1 from './images/c1.png'
import c2 from './images/c2.png'
import c4 from './images/c4.png'
import c3 from './images/c3.png'
import c5 from './images/c5.png'


function Languages() {
  return (
    <>
    <div id='cardbody' className='d-flex'>

    <Card className='imgbody2'>
      <Card.Body>
        <div className='d-flex'>
        <h3>English</h3>
     <img className='lang' src={c2} alt="" />
        </div>
    
      </Card.Body>
    </Card>

    <Card className='imgbody3'>
      <Card.Body>
        <div className='d-flex'>
        <h4>Malayalam</h4>
    <img className='lang' src={c3} alt="" />
        </div>
      </Card.Body>
    </Card>

    <Card className='imgbody4'>
      <Card.Body>
        <div className='d-flex'> 
        <h3>Hindi</h3>
    <img className='lang' src={c1} alt="" />
        </div>
 
      </Card.Body>
    </Card>

    <Card className='imgbody5'>
      <Card.Body>
        <div className='d-flex'>
        <h3>Tamil</h3>
    <img className='lang' src={c4} alt="" />
        </div>
    
      </Card.Body>
    </Card>

    <Card className='imgbody6'>
      <Card.Body>
        <div className='d-flex'>
        <h3>Telugu</h3>
    <img className='lang' src={c5} alt="" />
        </div>
    
      </Card.Body>
    </Card>

    </div>
    </>
  )
}

export default Languages