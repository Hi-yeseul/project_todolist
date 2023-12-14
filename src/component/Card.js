import React, {useState} from 'react';
import EditTask from '../modals/EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
  const [modal, setModal] = useState(false);
  const colors = [ 
    {
      primaryColor : "#ba80ca",
      secondaryColor: "rgba(229,182,242,0.7)"
    },
    {
      primaryColor : "#87a2f0",
      secondaryColor: "rgba(182,197,242,0.7)"
    },
    {
      primaryColor : "#5ec189",
      secondaryColor: "rgba(182,242,208,0.7)"
    },
    {
      primaryColor : "#e3c465",
      secondaryColor: "rgba(242,227,182,0.7)"
    },
    {
      primaryColor : "#f56464",
      secondaryColor: "rgba(239,176,176,0.7)"
    }
  ]
  const toggle = () => {
    setModal(!modal);
  }
  const updateTask = (obj) => {
    updateListArray(obj, index)
  }
  const hendleDelete = () => {
    deleteTask(index) // 삭제버튼 클릭시 화면 및 로컬스토리지 내용 삭제
    window.location.reload() //새로고침
  }
  return (
    <div className="card-wrapper">
      <div className="card-top" style={{backgroundColor:colors[index%5].primaryColor}}></div>
      <div className="task-holder">
        <span className="card-header" style={{backgroundColor:colors[index%5].secondaryColor}}>{taskObj.Name}</span>
        <p className="mt-2">{taskObj.Description}</p>
        <div>
          <i className="far fa-edit" style={{color:colors[index%5].primaryColor, cursor:"pointer"}} onClick={() => setModal(true)}/>
          <i className="fas fa-trash-alt" style={{color:colors[index%5].primaryColor, cursor:"pointer"}} onClick={hendleDelete}/>
        </div>
      </div>
      <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
    </div>
  );
};
export default Card;