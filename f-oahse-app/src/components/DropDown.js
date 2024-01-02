import Btn from "./Button";
import Item from "./Item";
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import './DropDown.css';
const DropDown =(props)=>{
    const {text, ItemOnClick, items, className} = props;
    
    const toggleDropDown =(value) => {
        const accordion = document.getElementById('dropdown-btn');
        var computedWidth = window.getComputedStyle(accordion).width;
        computedWidth = parseInt(computedWidth) + 60 + 'px';
        var computedHeight = window.getComputedStyle(accordion).height;
        console.log("height",computedHeight, 'width',computedWidth)

        if (value){
            const item = document.getElementById(value+'-caret');
            if (item != null){
                if (item.style.transform === 'rotate(-90deg)'){
                    item.style.transform='rotate(0deg)';
                }
                else{
                    item.style.transform='rotate(-90deg)';
                }
            }
        }
        //showing drop down-----------
        const container = document.getElementById("dropdown-btn-accordion");
        //container.style.width=computedWidth;
        const accordionItems  = document.getElementsByClassName('accordionitem');
        if (container.style.height === '200px'){
            container.style.height = '0px';
            for (let i = 0; i < accordionItems.length; i++) {
                const currentAccordionItem = accordionItems[i];
                currentAccordionItem.style.transition= '0.5s';
                currentAccordionItem.style.width=computedWidth;
                currentAccordionItem.style.visibility="hidden";
            }
        }
        else{
            container.style.height = '200px';
            for (let i = 0; i < accordionItems.length; i++) {
                const currentAccordionItem = accordionItems[i];
                currentAccordionItem.style.transition= '0.5s';
                currentAccordionItem.style.width=computedWidth;
                currentAccordionItem.style.visibility="visible";
            }
        }
    };
    
    return(
        <div class="dropdown-btn" id='dropdown-box'>
            <Item id='dropdown-btn' righticonname={faCaretDown} iconcolor='dark' text={text}  className={`item ${className}`} onClick={()=>toggleDropDown('dropdown-btn')}/>  
            <div id='dropdown-btn-accordion' className='dropdown-btn-accordion'>
                {items.map((item, index) => (
                    <Item key = {index} lefticonname={faCaretDown} iconcolor='dark' text={item} onClick={ItemOnClick} className="item accordionitem" />
                ))}
            </div>
        </div>
    )
}
export default DropDown;