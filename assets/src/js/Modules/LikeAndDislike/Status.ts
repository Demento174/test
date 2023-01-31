import {IElement} from "./Elements/Interfaces";
import {IStorage} from "./Storage/IStorage";
import {ElementCount, ElementDislike, ElementLike, ElementPost} from "./Elements/Elements";
import {ValuesEnum} from "../settings";
import {get_ip} from "./Init";

interface IStatus{
}
abstract class AbstractStatus {
    protected readonly post_id:number;
    protected elementLike:ElementLike;
    protected elementDislike:ElementDislike;
    protected elementCount:ElementCount;
    protected elementPost:ElementPost;
    protected storageClass :IStorage;
    protected requestClass :IRequest;
    protected constructor(id:number,storageClass:IStorage,requestClass :IRequest)
    {
        this.post_id = id;
        this.elementLike    = new ElementLike(id);
        this.elementDislike = new ElementDislike(id);
        this.elementCount   = new ElementCount(id);
        this.elementPost    = new ElementPost(id,storageClass);
        this.storageClass = storageClass;
        this.requestClass = requestClass;

    }

    public abstract activate():void;

}

export class Like extends AbstractStatus implements IStatus{


    public activate():void
    {
        this.elementPost.set_status(ValuesEnum.LIKE);
        this.elementLike.active()
        this.elementDislike.deactivate();
        this.elementCount.plus();
        this.storageClass.set_value(this.post_id,ValuesEnum.LIKE);
        this.send_request();
    }

    send_request()
    {
        this.requestClass.set_data({
            action:'like',
            id:this.elementPost.get_id(),
            ip:get_ip()
        });

        this.requestClass.send_post();
    }

    static init(id:number,storageClass:IStorage,requestClass :IRequest):Like
    {
        return  new Like(id,storageClass,requestClass);

    }
}
export class Dislike  extends AbstractStatus  implements IStatus{
    public activate():void
    {
        this.elementPost.set_status(ValuesEnum.DISLIKE);
        this.elementDislike.active();
        this.elementLike.deactivate()
        this.elementCount.minus();
        this.storageClass.set_value(this.post_id,ValuesEnum.DISLIKE);
        this.send_request();
    }

    send_request()
    {
        this.requestClass.set_data({
            action:'dislike',
            id:this.elementPost.get_id(),
            ip:get_ip()

        });
        this.requestClass.send_post();
    }

    static init(id:number,storageClass:IStorage,requestClass :IRequest):Dislike
    {
        return new Dislike(id,storageClass,requestClass);
    }
}
export class Null  extends AbstractStatus  implements IStatus{
    public activate():void
    {
        this.elementPost.set_status(ValuesEnum.NULL);
        this.elementDislike.deactivate();
        this.elementLike.deactivate()

        if(this.elementPost.get_current_status() === ValuesEnum.LIKE){
            this.elementCount.minus();
            this.requestClass.set_data({
                action:'null',
                id:this.elementPost.get_id(),
                ip:get_ip(),
            });
            this.requestClass.send_post();
        } else if(this.elementPost.get_current_status() === ValuesEnum.DISLIKE){
            this.elementCount.plus();
            this.requestClass.set_data({
                action:'null',
                id:this.elementPost.get_id(),
                ip:get_ip()
            });
            this.requestClass.send_post();
        }


        this.storageClass.set_value(this.post_id,ValuesEnum.NULL);
    }

    static init(id:number,storageClass:IStorage,requestClass :IRequest):Null
    {
        return new Null(id,storageClass,requestClass);
    }
}