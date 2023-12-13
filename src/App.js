import React, { useEffect, useState } from 'react'
import Editor from './Components/Editor';


const App = () => {
  const [html,setHtml]=useState("") 
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")

  const [doc,setDoc]=useState("")

  useEffect(()=>{
    const timeout = setTimeout(() => {
          setDoc(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html> `)
          }, 300);

       return ()=>{
            clearTimeout(timeout);
       };
  },[html,css,js]);

  return (
   <>
    <div className='pane top-pane'>
        <Editor  language="xml" displayName="HTML" value={html} onChange={setHtml}   />
        <Editor  language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editor  language="javascript" displayName="JS" value={js} onChange={setJs} />

    </div>
        <div className='pane'>
          <iframe srcDoc={doc} title="output" sandbox="allow-scripts"
          width="100%" height="100%" frameborder="0"/>
    </div>
   </>
  );
};

export default App;