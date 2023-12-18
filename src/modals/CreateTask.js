import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const CreateTaskPopup = ({modal, toggle, save}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDisciption] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target

    if (name === "taskName") 
    {
      setTaskName(value)
    }else{
      setDisciption(value)
    }
  }

  const handleSave = () => {
    let taskObj = {}
    taskObj["Name"] = taskName
    taskObj["Description"] = description
    save(taskObj)
  }

  
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader >
          <div className='justify-content-center'>
            <input type='text' className='form-control' value={taskName} onChange={handleChange} placeholder='제목을 쓰세요.' name='taskName'/>
          </div>
        </ModalHeader>

        <ModalBody>
          <div className='justify-content-center'>
            <textarea rows="5" className='form-control' value={description} onChange={handleChange} placeholder='할일을 쓰세요.' name='descriptionName' />
          </div>
        </ModalBody>

        <ModalFooter className='justify-content-center'>
          <div className="btn btn-info" onClick={handleSave}><span className='text-dark'>확인</span>
          </div>{' '}
          <div className="btn btn-outline-info waves-effect" onClick={toggle}>
            닫기
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTaskPopup;