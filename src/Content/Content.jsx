import React from 'react';
import './content.css'
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

const Content = (props) => {

      return (
            <>
            <div className="columns">
                  <h2>{props.value.title}
                  <IconButton onClick={() => {
                        props.fun(props.index);
                  }}>
                        <DeleteIcon style={{color:"#31688a", cursor:'pointer'}}/>
                  </IconButton>

                  </h2>
                  <textarea value={props.value.body} readOnly/>
            </div>
            </>
      )
}

export default Content;