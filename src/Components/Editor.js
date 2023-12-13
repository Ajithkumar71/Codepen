import React, { useState } from 'react'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControllerEDitor } from 'react-codemirror2';
import { Launch, TransitEnterexitSharp } from '@material-ui/icons';

const Editor = (props) => {
    const { language, displayName, value, onChange } = props;
    const [open,setOpen]=useState(true);
    function handlechange(editor,data,value){
        onChange(value);
    }
    return (
        <div className={`editor-container ${open? "":"collapsed"}`}>
            <div className='editor-title'>
                {displayName}
               
                <button onClick={()=>setOpen((prevOpen) => !prevOpen)} className="expand-collapse-btn">
                    {open ? < TransitEnterexitSharp/> :<Launch/>}
                </button>
                <ControllerEDitor onBeforeChange={handlechange} value={value} className="code-mirror-wrapper" options={{ 
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    theme:"material",
                    lineNumbers:true,
                }} />
            </div>

        </div>
    )
}

export default Editor;