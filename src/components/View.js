import React from "react";
import "../css/view.css";
export default function View(props) {

	const styles = {
		headDoc:{width:"20%"}
	}
	return (
			<table className = "table view">
			<thead>
				<tr>
				    <td style = {styles.headDoc}></td>
					<td className = "text-center" colSpan = "3">{props.nameOrgan.split("\n").map(((x, i)=><div key = {x + i}><b>{x}</b></div>))}</td>
					<td style = {styles.headDoc}></td>
				</tr>
				<tr>
					<td colSpan = "2">
						<div><b>СОГЛАСОВАНО</b></div>
						<div>{props.namePostLeft}</div>
						<div>{"___________________" + props.nameFIOLeft}</div>
            			<div>{'"______" _____________20___г.'}</div>
					</td>
					<td></td>
					<td colSpan = "2">
						<div><b>СОГЛАСОВАНО</b></div>
						<div>{props.namePostRight}</div>
						<div>{"___________________" + props.nameFIORight}</div>
            			<div>{'"______" _____________20___г.'}</div>
					</td>
				</tr>
				<tr>
					<td colSpan = "5" className = "text-center"><b>МЕТОДИЧЕСКАЯ РАЗРАБОТКА</b><div>{props.nameDoc}</div><div>по учебной дисциплине</div><div>{'"' + props.nameDis + '"'}</div></td>
				</tr>
				<tr>
            		<td colSpan = "2">
              			<div>Дата проведения: {props.dateProv.split("-").reverse().join()} г.</div>
              			<div>Время проведения: {props.timeProv}</div>
              			<div>Курс, группа: {props.kurs}</div>
              			<div>Специальность: {props.prof}</div>
              			<div>Место проведения: {props.mesto}</div>
            		</td>
          		</tr>
          		<tr>
          			<td colSpan = "2">
          				<div><b>Разработано</b></div>
          				<div>{props.devel.split("\n").map(((x, i)=><div key = {x + i}>{x}</div>))}</div>
          			</td>
          			<td></td>
          		</tr>
          		<tr>
          			<td>
          				<div><b>Рассмотрено и одобрено</b></div>
          				<div>{props.odobr.split("\n").map(((x, i)=><div key = {x + i}>{x}</div>))}</div>
          			</td>
          		</tr>
          		<tr>
          			<td colSpan = "5" className = "text-center">{props.year + " г."}</td>
          		</tr>
			</thead>
			<tbody>
			<tr>
				<td className = "text-center">Этапы занятие</td>
				<td className = "text-center">Деятельность преподавателя</td>
				<td className = "text-center">Деятельность обучающихся</td>
				<td className = "text-center">Методы и формы организации занятия</td>
				<td className = "text-center">Время</td>
			</tr>
			</tbody>

			</table>
		)
}