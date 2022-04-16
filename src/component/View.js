import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'


 const View = ({data,deleteData,editData}) => {
  return data.map(d=> (
      <tr key={d.name}>
          <td>{d.name}</td>
          <td>{d.city}</td>
          <td>{d.gender}</td>
          <td>{d.hobby}</td>
          <td>{d.desc}</td>
          <td className='delete-btn' onClick={()=>deleteData(d.name)}>
              <Icon icon={trash}></Icon>
          </td>
          <td className='edit-btn'>
              <Icon icon={edit2}></Icon>
          </td>
      </tr>
  ))
}
export default View;

