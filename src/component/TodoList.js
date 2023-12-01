import React, {useState, useEffect} from 'react';
import CreateTaskPopup from '../modals/CreateTask';



const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("taskList")
      if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)

      }
  }, [])

  const toggle = () => {
    setModal(!modal);
  }


  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList)) // 로컬스토리지 저장
    setTaskList(tempList)
    setModal(false)
  }

  return (
    <>
      <div className='header text-center'>
        <h3>TodoList</h3>
        <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>할일 만들기</button>
      </div>
      <div className='tast-container'>
        {taskList.map((obj) => <li>{obj.Name}</li>)}
      </div>
      <CreateTaskPopup toggle = {toggle} modal={modal} save={saveTask}/>
    </>
  );
};

export default TodoList;