import React, { useEffect, useState } from "react";
import Editors from "./Components/Edd";

const App = () => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>`);
        }, 250);
        return () => {
            clearTimeout(timeout);
        };
    }, [html, css, js]);
    return (
        <>
            <div className="pane top-pane">
                <Editors
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Editors
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <Editors
                    language="javascript"
                    displayName="JS"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div className="pane">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameborder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    );
};

export default App;