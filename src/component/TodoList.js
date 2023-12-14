import React, {useState, useEffect} from 'react';
import CreateTaskPopup from '../modals/CreateTask';
import Card from './Card';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("taskList") // 로컬스토리지 저장

      if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
      }
  }, [])

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
  }

  const updateListArray = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const toggle = () => {
    setModal(!modal);
    window.location.reload() //새로고침
  }

  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList)) // 로컬스토리지 저장
    setModal(false)
    setTaskList(taskList)
    window.location.reload() //새로고침
  }

  return (
    <>
      <div className='header text-center'>
        <h3>Todo List</h3>
        <i className="fa-solid fa-square-plus fa-beat" style={{fontSize: '50px', fontColor: "#1c2e4a", cursor:"pointer"}} onClick={() => setModal(true)}></i> 
      </div>
      
      <div className='task-container'>
        {taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
      </div>
      <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask}/>
    </>
  );
};

export default TodoList;