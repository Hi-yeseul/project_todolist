import React, {useEffect, useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDisciption] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target

    if (name === "taskName") 
    { setTaskName(value)
    } else {
      setDisciption(value)
    }
  }

  useEffect (() => {
    setTaskName(taskObj.Name)
    setDisciption(taskObj.Description)
  },[taskObj.Name, taskObj.Description])

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {}
    tempObj['Name'] = taskName
    tempObj['Description'] = description
    updateTask(tempObj)
  }

  return (
    <>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>
          <div className='form-group'>
            <input type='text' className='form-control' value={taskName} onChange={handleChange} placeholder='제목을 쓰세요.' name='taskName'/>
          </div>
        </ModalHeader>

        <ModalBody>
          <div className='form-group'>
            <textarea rows="5" className='form-control' value={description} onChange={handleChange} placeholder='할일을 쓰세요.' name='descriptionName'/>
          </div>
        </ModalBody>

        <ModalFooter className='justify-content-center'>
          <div className="btn btn-info" onClick={handleUpdate}><span className='text-dark'>수정</span>
          </div>{' '}
          <div className="btn btn-outline-info waves-effect" onClick={toggle}>
            닫기
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditTaskPopup;