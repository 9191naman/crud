import React,{useState,useEffect} from 'react'
import './Form.css'
import View from './View';

// getting the values of local storage //
const getDatafromLS = () =>{
    const data1  = localStorage.getItem('data');
    if(data1){
        return JSON.parse(data1);
    }
    else{
        return []
    }
}


const Form = () => {
    //main array which stores data
   const [data,setData] = useState(getDatafromLS())

   // input states//
   const [name,setName] = useState('');
   const [city,setCity] = useState('');
   const [gender,setGender] = useState('');
   const [hobby,setHobby] = useState('');
   const [desc,setDesc] = useState('');


   //form submit event
   const handleDataSubmit =(e)=>{
       e.preventDefault();
       //creating an object//
       let info = {
           name:name,                     // es6 key value pair syntax //
           city:city,
           gender:gender,
           hobby:hobby,
           desc:desc
       }
       setData([...data,info])
       setName('')
       setCity('')
       setGender('')
       setHobby('')
       setDesc('')
   }

   //delete data from localStorage//
   const deleteData =(name)=>{
    //    console.log(name);
    const filteredData = data.filter((element,index)=>{
        return element.name !== name
    })
    setData(filteredData);
   }

   //saving data into localstorage//
   useEffect(()=>{
       localStorage.setItem('data',JSON.stringify(data));
   },[data])

  
  return (
    <div className="container">
        <form>
            <div className='name'>
                <input type="text" placeholder='enter fullname' onChange={(e)=> setName(e.target.value)} value={name}></input>
            </div>
            
            <div className='city'>
                <select value={city} onChange={e=> setCity(e.target.value)}>
                <option>City</option>
                <option>Indore</option>
                <option>Bhopal</option>
                <option>Ujjain</option>
                <option>Mumbai</option>
                <option>Noida</option>
            </select>
            </div>

            <div>
            <label className='gender'>Gender</label>
            <input type="radio" name='gender' value='male' onChange={(e)=> setGender(e.target.value)}/>Male
            <input type="radio" name='gender' value='female' onChange={(e)=> setGender(e.target.value)}/>Female
            </div>
            

            <div className='hobbies'>
                 <label>Hobbies</label>
             <input type="checkbox" value="web" onChange={(e)=> setHobby(e.target.value)}/>web
             <input type="checkbox" value="android"  onChange={(e)=> setHobby(e.target.value)}/>Android
             <input type="checkbox" value="Blockchain"  onChange={(e)=> setHobby(e.target.value)}/>Blockchain
             <input type="checkbox" value="Mobile"  onChange={(e)=> setHobby(e.target.value)}/>Mobile
            </div>

            <div className='description'>
                <textarea placeholder='description....'  onChange={(i)=> setDesc(i.target.value)} value={desc}></textarea>
            </div>

            <div className='submit'>
                <button type="button" value="submit" onClick={handleDataSubmit}>submit</button>
            </div>

        </form>

        <div className='view-container'>
            {data.length > 0 && 
               <div>
                <table style={{marginLeft:"35px"}}>
                    <thead border="1px">
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Description</th>
                        <th>Delete</th>
                        <th>update</th>
                    </tr>
                    </thead><br></br>
                    <tbody>
                        <View data={data} deleteData={deleteData}/>
                    </tbody>
                </table>
               
               </div>}
            {data.length < 1 && <div>No data is added yet</div>}
        </div>
    </div>
  )
}

export default Form