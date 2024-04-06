import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateWork = ({modal, toggle, save}) => {

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
    
    const handleSave = () => {
        let workObj = {}
        workObj["Name"] = workName
        workObj["Description"] = description
        save(workObj)
        setWorkName('');
        setDescription('');
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Work</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Work Name</label>
                        <input type="text" className='form-control' value = {workName} onChange = {handleChange} name = "workName" maxLength={25} />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows="5" className='form-control' value = {description} onChange = {handleChange} name = "description" maxLength={150}/>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>
                Create
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
                Cancel
            </Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateWork;