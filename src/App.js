import React, {useState, useEffect} from "react";
import View from "./components/View";
import {get} from "./action";
import './App.css';
function App() {
  const d = new Date();
  const [year, setYear] = useState(d.getFullYear());
  const [month, setMonth] = useState(d.getMonth());
  const [day, setDay] = useState(d.getDate());
  const [nameOrgan, setNameOrgan] = useState("");
  const [namePostLeft, setNamePostLeft] = useState("");
  const [namePostRight, setNamePostRight] = useState("");
  const [nameFIOLeft, setNameFIOLeft] = useState("");
  const [nameFIORight, setNameFIORight] = useState("");
  const [nameDoc, setNameDoc] = useState("ПРАКТИЧЕСКОГО ЗАНЯТИЯ");
  const [nameDis, setNameDis] = useState("Физическая культура");
  const [dateProv, setDateProv] = useState("01.01.2021");
  const [timeProv, setTimeProv] = useState("");
  const [kurs, setKurs] = useState("");
  const [prof, setProf] = useState("");
  const [mesto, setMesto] = useState("");
  const [odobr, setOdobr] = useState("");
  const [devel, setDevel] = useState("");
  const [plan, setPlan] = useState([{}]);
function recursion(props) {

  }
useEffect(()=>{
    get(setPlan,"pourplan.json");
    recursion(props.plan)
},[])

  return (
    <div className="container">
    {console.log(plan)}
      <table className = "table">
        <thead>
          <tr>
            <td colSpan="5"><textarea onChange = {(e)=>{setNameOrgan(e.target.value)}} defaultValue = {nameOrgan}  placeholder = "Название организации" className = "form-control text-center"/></td>
          </tr>
          <tr>
            <td><input type = "text"  onChange = {(e)=>{setNameFIOLeft(e.target.value)}} placeholder = {"Ф. И. О."} className = "form-control text-left"/></td>
            <td><input type = "text"  onChange = {(e)=>{setNamePostLeft(e.target.value)}} placeholder = {"Должность"} className = "form-control text-left"/></td>
            <td></td>
            <td><input type = "text" onChange = {(e)=>{setNameFIORight(e.target.value)}} placeholder = {"Ф. И. О."} className = "form-control text-left"/></td>
            <td><input type = "text" onChange = {(e)=>{setNamePostRight(e.target.value)}}  placeholder = {"Должность"} className = "form-control text-left"/></td>
          </tr>
          <tr>
            <td colSpan = "5">
              <select onChange = {(e)=>{setNameDoc(e.target.value)}} className = "form-control text-center" >
                <option value="ПРАКТИЧЕСКОГО ЗАНЯТИЯ">ПРАКТИЧЕСКОГО ЗАНЯТИЯ</option>
                <option value="ОТКРЫТОГО  ПРАКТИЧЕСКОГО ЗАНЯТИЯ">ОТКРЫТОГО  ПРАКТИЧЕСКОГО ЗАНЯТИЯ</option>
              </select>
              <div className = "text-center">по учебной дисциплине</div>
              <div  className = "text-center"><input  type = "text" defaultValue = {nameDis}  onChange = {(e)=>{setNameDis(e.target.value)}}   placeholder = {"Название дисциплины"} className = "form-control text-center"/></div>
            </td>
          </tr>
          <tr>
            <td>
               <div><label htmlFor="dateUr">Дата проведения:</label> <input id = "dateUr" onChange = {(e)=>{setDateProv(e.target.value)}} defaultValue = {`${year}-${month + 1}-${day.toString().length > 1?day:"0" + day}`} type = "date" className = "form-control" /></div>
            </td>
            <td colSpan = "2">
               <div><label htmlFor="dateTimeUr">Время проведения:</label> <input id = "dateTimeUr" onChange = {(e)=>{setTimeProv(e.target.value)}}  type = "text" className = "form-control" /></div>
            </td>

            <td colSpan = "2">
               <div><label htmlFor="kurs">Курс, группа:</label> <input id = "kurs" onChange = {(e)=>{setKurs(e.target.value)}} type = "text" className = "form-control" /></div>
            </td>
             </tr>
             <tr>
            <td colSpan = "2">
               <div><label htmlFor="prof">Специальность, профессия:</label> <input id = "prof" onChange = {(e)=>{setProf(e.target.value)}}  type = "text" className = "form-control" /></div>
            </td>
            <td colSpan = "3">
               <div><label htmlFor="mesto">Место проведения:</label> <input id = "mesto" onChange = {(e)=>{setMesto(e.target.value)}}  type = "text" className = "form-control" /></div>
            </td>
          </tr>
          <tr>
            <td colSpan = "2"><label htmlFor="mesto">Разработано:</label><textarea onChange = {(e)=>{setDevel(e.target.value)}} className = "form-control text-left"/></td>
            <td colSpan = "3"><label htmlFor="mesto">Рассмотрено и одобрено:</label><textarea onChange = {(e)=>{setOdobr(e.target.value)}} className = "form-control text-left"/></td>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>

          </tr>
        </tbody>
      </table>
      <div><View plan = {plan} year = {year} odobr = {odobr} devel = {devel} mesto = {mesto} prof = {prof} kurs = {kurs} timeProv = {timeProv} dateProv = {dateProv} nameDis = {nameDis} nameDoc = {nameDoc} nameFIORight = {nameFIORight} nameFIOLeft = {nameFIOLeft} nameOrgan = {nameOrgan} namePostLeft = {namePostLeft} namePostRight = {namePostRight}/></div>
    </div>
  );
}

export default App;
