import React from 'react';
import { Card, Button,  CardTitle, CardText, CardDeck,
    CardBody } from 'reactstrap';
   

 

const Trails = (props) => {
    const trailList = props.trails.map((trail)=>{
        return(
           
    <CardDeck>

      <Card>
        <CardBody key={trail._id}>
          <CardTitle>{trail.name}</CardTitle>
          <CardText>{trail.review}</CardText>
          <Button className="button" onClick={(e)=>{e.preventDefault(); props.deleteTrail(trail._id); }}>Delete</Button>
        </CardBody>
      </Card>
      </CardDeck>
       
           
        )
        
    })
return(
    <div className="trailing">
  
        <ul>
        {trailList}
        </ul>
    </div>
    )
}

export default Trails;

{/* <span>{trail.name}</span><br/> 
<span>{trail.review}</span><br/>
<button onClick={(e)=>{
    e.preventDefault();
    props.deleteTrail(trail._id);
}}>Delete</button> 
<button onClick={(e)=>{
    e.preventDefault();
    props.openEdit(trail);
}}>edit</button> */}