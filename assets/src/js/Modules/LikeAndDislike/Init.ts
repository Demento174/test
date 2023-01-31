import {AttributesEnum, COOKIE_NAME, SelectorsEnum, ValuesEnum} from "../settings";
import {CookieStorage} from "./Storage/CookieStorage";
import {getParent} from "../../src/common";
import {ClickDislike, ClickLike} from "./Actions";
import {ElementDislike, ElementLike, ElementPost} from "./Elements/Elements";
import {XHR} from '../Request/XHR'

export function init():void
{
    let storageClass = new CookieStorage(COOKIE_NAME);
    let requestClass = new XHR('http://test.demento174.ru/wp-admin/admin-ajax.php');
    requestClass.set_callback((response)=>{console.log(response)})

    document.querySelectorAll(SelectorsEnum.POST).forEach(post=>
    {
        let id = Number(post.getAttribute(AttributesEnum.ID));
        let elementPost = new ElementPost(id,storageClass);
        let elementLike = new ElementLike(id);
        let elementDislike = new ElementDislike(id);

        let data = storageClass.get_value(id);

        if(data===ValuesEnum.LIKE)
        {

            elementLike.active()
            elementDislike.deactivate();
        }else if(data===ValuesEnum.DISLIKE)
        {
            elementLike.deactivate()
            elementDislike.active();
        }
        if(elementPost.get_current_status()==='')
        {
            elementPost.set_status(ValuesEnum.NULL);
        }
    })

    document.querySelectorAll(SelectorsEnum.LIKE).forEach(elementLikeButton=>
    {

        elementLikeButton.addEventListener('click',(event)=>
        {
           let like = event.target;
           let postElement = getParent(like,SelectorsEnum.POST);

           let id = postElement.getAttribute(AttributesEnum.ID);

           new ClickLike(id,storageClass,requestClass);
        });
    })

    document.querySelectorAll(SelectorsEnum.DISLIKE).forEach(elementLikeButton=>
    {
        elementLikeButton.addEventListener('click',(event)=>
        {
            let dislike = event.target;
            let postElement = getParent(dislike,SelectorsEnum.POST);
            let id = Number(postElement.getAttribute(AttributesEnum.ID));

            new ClickDislike(id,storageClass,requestClass);
        });
    })


}

export function get_ip()
{
    return document.querySelector('[data-ip]').getAttribute('data-ip');

}