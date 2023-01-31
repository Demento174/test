import AddHandlerForEvent from "../Controllers/AddHandlerForEvent";

export default class Scroll{
    constructor(selectorBtn,speed)
    {
        document.querySelectorAll(selectorBtn).forEach(btn=>
        {
            if(!btn.hasAttribute('data-target'))
            {
                console.log(btn);
                throw 'scroll btn dont have important attribute';
            }else if(!document.querySelector(btn.getAttribute('data-target')))
                {
                    console.log(btn.getAttribute('data-target'));
                    throw 'scroll btn directly to undefined element';
                }

            new AddHandlerForEvent(btn,'click',(e)=>
            {
                e.preventDefault();
                this.__handler(speed,document.querySelector(btn.getAttribute('data-target')))
            });
        });
    }

    __handler(speed,target)
    {

        // target.scrollIntoView({
        //     behavior: speed,
        //     block: 'nearest'
        // })
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: target.getBoundingClientRect().top + window.pageYOffset
        });
    }

}