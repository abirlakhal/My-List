import React, {useState} from 'react';
import EditWork from '../modals/editWork';

const Card = ({workObj, index, deleteWork, updateListArray}) => {

    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
     
     const toggle = () => {
        setModal(!modal);
     }

     const updateWork = (obj) => {
        updateListArray(obj, index)
     }
    
     const handleDelete = () => {
        deleteWork(index)
     }
    return (
        <div class="card-wrapper m-1" >
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "work-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>
                    {workObj.Name}
                </span>
                <p className='mt-3' style={{ overflow: 'hidden', wordWrap: 'break-word' }} >{workObj.Description}</p>
                <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
                    <i class = "far fa-edit m-1" style={{"color": colors[index%5].primaryColor, "cursor":"pointer"}} onClick={() => setModal(true)}></i>
                    <i class = "fas fa-trash-alt" style={{"color": colors[index%5].primaryColor, "cursor":"pointer"}} onClick={handleDelete}></i>
                </div>
            </div>
            <EditWork modal = {modal} toggle = {toggle} updateWork={updateWork} workObj={workObj}/>
        </div>
    );
};

export default Card;