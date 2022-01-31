import React,{useState} from 'react';

function Select(props) {
    const [data] = useState(props.data)
    const [selectData,setSelectData] = useState('')

    const handleChange=(e)=>{
        setSelectData(e.target.value)
        if(props.onChange){
            props.onChange(selectData)
        }
    }

    let options = data.map(data=>(
        <option key={data.id} value={data.id}>
            {data.name}
        </option>
    ))
  return (
      <>
       <select name='select'
               className='select-search'
               onChange={handleChange}
       >
           <option>Select Item</option>
           {options}
       </select>
      </>
  )
}

export default Select;
