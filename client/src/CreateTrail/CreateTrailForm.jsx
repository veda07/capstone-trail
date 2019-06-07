import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CreateTrailForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            review: '',
            location: {
                lat: '',
                long: '',
               
            }
        }
            this.toggle = this.toggle.bind(this);
    }
      
        toggle() {
          this.setState(prevState => ({
            modal: !prevState.modal
          }));
        }


        
    
    handleChange = (e) =>{
        this.setState({
            location: { ...this.state.location, 
        [e.target.name]:  e.target.value}
        })
    }
    render() {
        return (
          <div className="reviewModal">
            <Button  color="info" onClick={this.toggle}>{this.props.buttonLabel}Leave A Trail Review</Button>
            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
            
              <form onSubmit = {this.props.addTrail.bind(null, this.state.location)}>
            <h3>Trail Reviews</h3>
            <label>
                Trail Name:
                <input onChange={this.handleChange} type="text" name="name"/>
            </label>

            <label>
                Review:
                <input onChange={this.handleChange} type="text" name="review"/>
             </label>
             <label>
                 Location:
                 <input onChange={this.handleChange} placeholder="lat" type="text" name= "lat"/>
                 <input onChange={this.handleChange} placeholder="log" type="text" name= "long"/>
             </label>
                <input type="submit"/>
            </form>
              </ModalBody>
        
            </Modal>
          </div>
        )
      }
    }

           
        
    



export default CreateTrailForm; 

