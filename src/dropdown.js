import { doc } from 'prettier';
import './dropdown.css';

const dropdown = (id,type = 'click') => {
    const dropdownElement = document.getElementById(id);
    const optionFrame = dropdownElement.querySelector('.option-frame');
    const dropdownFront = dropdownElement.querySelector('.dropdown-front');
    console.log(dropdownElement);
    
    const click = () => {
        if (isHidden()) {
            show();
        } else {
            hide();
        }
    }

    
    const hide = () => {
        optionFrame.setAttribute('style','display:none;');
        dropdownFront.classList.add('hidden');
        if (dropdownFront.classList.contains('visible')) dropdownFront.classList.remove('visible');
        
    }
    
    const isHidden = () => {
        const value = (optionFrame.style.display.toString() == 'none' && optionFrame.getAttribute('style'))
        return (value);
    }
    
    const show = () => {
        if (isHidden()) {
            const style = optionFrame.getAttribute('style');
            const newStyle = style.replace('display:none;','');
            optionFrame.setAttribute('style',newStyle);
            if (dropdownFront.classList.contains('hidden')) dropdownFront.classList.remove('hidden');
            dropdownFront.classList.add('visible');        
        };
    }
    
    if (type === 'mouseover') {
        dropdownElement.addEventListener('mouseleave',hide);
    }
    hide();
    console.log(isHidden());
    dropdownFront.addEventListener(type, click);
    optionFrame.addEventListener('click',hide);
};

const drawDropdown = (id,optionList,frontText = "Dropdown List") => {
    if (document.getElementById(id)) {
        throw new Error('Element ID already exists');
    }

    const dropdown = document.createElement('div');
    dropdown.id = id;
    dropdown.classList.add('dropdown');
    const dropdownFront = document.createElement('div');
    dropdownFront.textContent = frontText;
    dropdownFront.classList.add('dropdown-front');
    dropdownFront.setAttribute('style','position:relative;')
    dropdown.appendChild(dropdownFront);
    const ul = document.createElement('ul');
    ul.classList.add('option-frame');
    ul.setAttribute('style','width:inherit;position:absolute;z-index:2;')
    dropdown.appendChild(ul)
    optionList.forEach((option) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = option.name
        link.classList.add('dropdown-option');
        link.href = option.link;
        li.appendChild(link);
        ul.appendChild(li);
    });
    return dropdown
};

export {dropdown,drawDropdown}