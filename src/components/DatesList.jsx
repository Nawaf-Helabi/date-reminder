import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesList = ({person}) => {
  return (
    <Row className="justify-content-center mt-3">
    <Col sm="8" className="">
      <div className="rectangle p-3">
        {person.length?
        (person.map(item=>{ return(
          <div key={item.id} className="d-flex border-bottom mx-3 my-3">
          <img className="img-avatar" src="1.jpg" alt="alt1" />
          <div className="px-3"><p className="d-inline fs-5">
            {item.name}</p>
            <p className="fs-6">
             {item.date}</p></div>
        </div>)
        }))
         :(<h1 className="py-5 text-center">
          لا توجد مواعيد اليوم
         </h1>)}
      </div>
    </Col>
  </Row>
  )
}

export default DatesList
