import React, { useState } from "react"

export default function TextForm(props) {
    const handleOnChange =(e)=>{
        setText(e.target.value);
    }

    const handleUppercase=()=>{
        setText(Text.toUpperCase());
        props.showAlert("Success","Converted to Uppercase");
    }

    const handleLowercase=()=>{
        setText(Text.toLowerCase());
        props.showAlert("Converted to Lowercase");

    }

    const handleCopyText=()=>{
        
        console.log("Text copied");
        props.showAlert("Text Copied");

    }

    const handleExtSpc=()=>{
        let newText= Text.split(/\s+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces Removed");
    }

    const handleEmailExt=()=>{
        const emailArr =[]
        const textArr=Text.split(" ");
        for (let x in textArr){
            if (textArr[x].endsWith(".com")){
             emailArr.push(textArr[x]);
            }
        }
        emailArr.length>=0?setText(`The Email Id provided are ${emailArr}`):setText("No email found")
    }

    const handleRefresh=()=>{
        setText("");
    }
    
    // const charCount =()=>{

    // }
    // const [count, setCount] =useState()
    const [Text, setText] = useState("")
    return (
        <div className="container my-5" >
            <div className="mb-3">
                <h1 className='text-center'>{props.Heading}</h1>
                <textarea className="form-control" id="myTextarea" rows="9" value={Text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" disabled={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUppercase}>Convert to Uppercase</button>
            <button type="button" disabled={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLowercase}>Convert to Lowercase</button>
            <button type="button" disabled={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleCopyText}>Copy text</button>
            <button type="button" disabled={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleExtSpc}>Remove Extra Spaces</button>
            <button type="button" disabled={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleEmailExt}>Extract Email</button>
            <button type="button" disabled={Text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleRefresh}>Refresh</button>
            <div className="text-center my-3">
                <h1 className="text-center my-4">Your Text Summary</h1>
                <p>Total Number of Words are {Text.split(" ").filter((e)=>{return e.length!==0}).length} and total number of Characters are {Text.length}</p>
                <p>Reading time is {Text.split(" ").filter((e)=>{return e.length!==0}).length*0.025} seconds</p>
                <h1 className="text-center my-3">PREVIEW</h1>
                <p>{Text.length<2?"Write something in the Textbox above to Preview that Here.":Text}</p>

            </div>
        </div>
    )
}
