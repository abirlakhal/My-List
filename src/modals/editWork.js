import React, {useEffect, useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditWork = ({modal, toggle, updateWork, workObj}) => {

    const [workName, setWorkName ] = useState('');
    const [description, setDescription] = useState('');
    
    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === "workName"){
            setWorkName(value)
        }else{
            setDescription(value)
        }
    }
    
    useEffect(() => {
        setWorkName(workObj.Name)
        setDescription(workObj.Description)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault()
        let tempObj = {}
        tempObj["Name"] = workName
        tempObj["Description"] = description
        updateWork(tempObj)
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Work</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Work Name</label>
                        <input type="text" className='form-control' value = {workName} onChange = {handleChange} name = "workName" />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows="5" className='form-control' value = {description} onChange = {handleChange} name = "description"/>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>
                Update
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditWork;