import React, {useEffect, useState} from "react";
import Markdown from "markdown-to-jsx";

export default () => {
    const [content, setContent] = useState<string>();
    useEffect(() => {
        (async()=>{
            const response = await fetch(`${process.env.PUBLIC_URL}/_pages/about.md`);
            setContent(await response.text());
        })()
    }, []);

    if(!content){ return (<div>loading ...</div>)}

    return (
        <Markdown
            children={content}
            options={{
                overrides: {},
            }}
        />
    )
}