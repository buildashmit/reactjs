import './CSS/todoitems.css';
import checkMark from './assets/check-mark.png';
import close from "./assets/close.png";
import checkbox from "./assets/check-box.png";


const Todoitems = ({ no, display, text, setTodos }) => {

  const del = (no) => {
    let data= JSON.parse(localStorage.getItem("todos"));
    data=data.filter((item)=>item.no!==no);
    setTodos(data);
  }


  const toggle = (no) => {
    let data= JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="checked";
        }
        else{
          data[i].display="";
        }
        break;
      }
    }
    setTodos(data);
  }

  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=> {toggle(no)}}>
        {display===""?<img className="img" src={checkbox} alt="" />:<img className="img" src={checkMark} alt="" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img id="x" className="img" onClick={()=>{del(no)}} src={close} alt="" />
    </div>
  );
};

export default Todoitems;