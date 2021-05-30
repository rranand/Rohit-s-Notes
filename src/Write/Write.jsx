import React, { useState } from 'react'
import './write.css'
import AddIcon from '@material-ui/icons/Add';
import Content from '../Content/Content.jsx'

const RetrieveData = () => {
      let list = localStorage.getItem('lists');
            
      if (list) {
            return JSON.parse(list);
      } else {
            return [];
      }
}

const Write = () => {

      const [outer_class, Set_Outer_Class] = useState('');

      const [data, SetData] = useState(RetrieveData());


      const removeData = (id) => {
            const upd = data.filter((e, ind) => {
                  return ind !== id;
            });
            
            localStorage.setItem('lists', JSON.stringify(upd));
            SetData(RetrieveData());
      }

      const SubmitEvent = (event) => {
            event.preventDefault();

            const obj = {
                  id : new Date().getTime().toString(),
                  title : event.target.title.value,
                  body : event.target.note.value,
            }

            localStorage.setItem('lists', JSON.stringify([...data, obj]));
            SetData(RetrieveData());

            event.target.note.value = "";
            event.target.title.value = "";
            Set_Outer_Class('');
      }

      const UpEvent = () => {
            if (document.getElementById("detector").getAnimations().length === 0) {
                  Set_Outer_Class('outer spinWheel');
                  setTimeout(()=> {
                        Set_Outer_Class('outer');
                  }, 1000);
            }
      }

      return (
            <>
            <div className="parent_div">
                  <div className="child_div">
                        <form onSubmit={SubmitEvent}>
                              <input onChange={UpEvent} autoComplete="off" type="text" name="title" placeholder="Title" required/>
                              <textarea onChange={UpEvent} autoComplete="off" placeholder="Write Your Notes..." name="note" rows={10} cols={70} required/>
                              <button type="submit">{<AddIcon/>}</button>
                              <div id="detector" className={outer_class} />
                        </form>
                  </div>
            </div>

            <div className="main">
                  {data.map((val, ind) => {    
                        return (
                              <Content key={val.id} index={ind} value={val} fun={removeData}/>
                        );
                  })}
            </div>
            </>
      )
}

export default Write;