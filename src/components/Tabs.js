import React,{useState} from "react";


const Tabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
       <div>
         <ul>
            {tabs.map((tab,index)=>{
                <li key={index} onClick={()=> handleTabClick(index)}>
                 {tab.index}
                </li>
            })}
         </ul>
         <div>
             {tabs[activeTab].content}
         </div>

       </div>
    )
}

export default Tabs;