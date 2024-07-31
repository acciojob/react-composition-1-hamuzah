import React,{useState} from "react";
 


const Tabs = ({arr}) => {
    const[Tabs,setTabs] = useState(0)

    return (
        <div>
              <ul>
                {arr.map((tab,i)=>{
                    <li
                        key = {i}
                        onClick={()=>setTabs(i)}>
                            {tab.title}
                    </li>
                })}
              </ul>
              <p>
                {arr[Tabs].content}
              </p>
        </div>
    )
}

export default Tabs;    