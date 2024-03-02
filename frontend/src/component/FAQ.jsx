import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react"

const FAQ = ({question,answer}) => {

    const [isAnsShow,setAnsShowing]=useState(false);
  return (
    <article className="faq" onClick={()=>setAnsShowing(prev=>!prev)}>
        <div>
            <h4>{question}</h4>
            <button className="faq_icon" >
                {isAnsShow?<AiOutlineMinus/>:<AiOutlinePlus/>}
               
            </button>
        </div>
        {isAnsShow && <p>{answer}</p>}
      
    </article>
  )
}

export default FAQ