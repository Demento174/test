import {IElement, ILikeAndDislikeElement} from "./Interfaces";
import {AttributesEnum, SelectorsEnum, CLASS_ACTIVE, ValuesEnum} from "../../settings";
import {IStorage} from "../Storage/IStorage";



class QueryElement{
    public element:HTMLElement
    public constructor(selector:string)
    {
        this.element = document.querySelector(selector);
        if(this.element === undefined)
            throw `Element not found. Selector: ${selector}`
    }

    static get_element_by_post_id(id:number,selector:string)
    {
        return new QueryElement(`[${AttributesEnum.ID}="${id}"] ${selector}`)
    }
}

class LikeAndDislikeElement implements ILikeAndDislikeElement{
    protected element:HTMLElement;
    constructor(id:number,selector:string)
    {
        this.element = QueryElement.get_element_by_post_id(id,selector).element;
    }
    active()
    {
        this.element.classList.add(CLASS_ACTIVE)
    }
    deactivate()
    {
        this.element.classList.remove(CLASS_ACTIVE);
    }
}


export class ElementLike extends LikeAndDislikeElement implements IElement{
    static readonly SELECTOR =SelectorsEnum.LIKE;
    constructor(id:number)
    {
        super(id,ElementLike.SELECTOR);
    }
}

export class ElementDislike extends LikeAndDislikeElement  implements IElement{
    static readonly SELECTOR =SelectorsEnum.DISLIKE;
    constructor(id:number)
    {
        super(id,ElementDislike.SELECTOR);
    }
}

export class ElementCount  implements IElement{
    private element:any;
    static readonly SELECTOR = SelectorsEnum.COUNT;
    constructor(id:number)
    {
        this.element = QueryElement.get_element_by_post_id(id,ElementCount.SELECTOR).element;
    }
    plus():void
    {
        this.element.innerText = Number(this.element.innerText) +1;
    }
    minus()
    {
        this.element.innerText = Number(this.element.innerText) -1;
    }
    private set_count(int:number)
    {
        this.element.innerText = int;
    }

    public get_count():number
    {
        return Number(this.element.innerText);
    }

}

export class ElementPost  implements IElement{
    static  readonly SELECTOR = SelectorsEnum.POST;
    private readonly id :number;
    private element:any;
    private classStorage : IStorage;
    constructor(id:number,classStorage:IStorage)
    {
        let classElement = new QueryElement(`${ElementPost.SELECTOR}[${AttributesEnum.ID}="${id}"]`);
        this.element = classElement.element;
        this.id = id;
        this.classStorage = classStorage;
    }
    get_current_status():ValuesEnum|string
    {
        // return this.element.getAttribute(AttributesEnum.STATUS);
        return this.classStorage.get_value(this.id);
    }
    get_id():number
    {
        return Number(this.element.getAttribute(AttributesEnum.ID));
    }

    set_status(status:ValuesEnum):void
    {
        this.element.setAttribute(AttributesEnum.STATUS,status);
    }

}