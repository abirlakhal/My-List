import React, { useEffect, useState } from 'react'
import CreateWork from '../modals/createWork'
import Card from './card';

const List = () => {

    const [modal, setModal] = useState(false);
    const [workList, setWorkList ] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("workList")

        if(arr){
            let obj = JSON.parse(arr)
            setWorkList(obj)
        }
    },[])

    const deleteWork = (index) => {
        let tempList = workList
        tempList.splice(index, 1)
        localStorage.setItem("workList", JSON.stringify(tempList))
        setWorkList(tempList)
        window.location.reload()
    }
    
    const updateListArray = (obj, index) => {
        let tempList = workList
        tempList[index] = obj
        localStorage.setItem("workList", JSON.stringify(tempList))
        setWorkList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveWork = (workObj) => {
        let tempList = workList
        tempList.push(workObj)
        localStorage.setItem("workList", JSON.stringify(tempList))
        setModal(false)
        setWorkList(workList)
    }

    return (
      <>
        <div className='header text-center'>
            <h3>My Work List</h3>
            <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>
                Create
            </button>
        </div>
        <div className='work-container'>
            {workList && workList.map((obj, index) => 
            <Card workObj = {obj} index = {index} deleteWork = {deleteWork}
            updateListArray = {updateListArray}
            />)}
        </div>
        <CreateWork toggle={toggle} modal={modal} save={saveWork}/>
      </>
    )
  
}

export default List