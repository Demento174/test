import {Dislike, Like, Null} from "./Status";
import {IStorage} from "./Storage/IStorage";
import {ElementPost} from "./Elements/Elements";
import {ValuesEnum} from "../settings";

interface IAction{
}

class Action{
    protected likeStatusClass       : Like;
    protected dislikeStatusClass    : Dislike;
    protected nullStatusClass       : Null;

    public constructor(post_id:number,storageClass:IStorage,request:IRequest)
    {
        this.likeStatusClass    = Like.init(post_id,storageClass,request);
        this.dislikeStatusClass = Dislike.init(post_id,storageClass,request);
        this.nullStatusClass    = Null.init(post_id,storageClass,request);
    }

    public set_like(){
        this.likeStatusClass.activate();
    }

    public set_dislike(){
        this.dislikeStatusClass.activate();
    }

    public set_null(){
        this.nullStatusClass.activate();
    }
}

abstract class AbstractClickLikeAndDislike {
    protected actionClass : Action;
    protected elementPost : ElementPost;
    constructor(post_id:number,storageClass:IStorage,request:IRequest)
    {
        this.actionClass = new Action(post_id,storageClass,request);
        this.elementPost = new ElementPost(post_id,storageClass);
        this.handler();
    }

    protected abstract handler():void;

}
export class ClickLike extends AbstractClickLikeAndDislike implements IAction{

    protected handler():void
    {

     switch (this.elementPost.get_current_status())
     {
         case ValuesEnum.LIKE:
             this.actionClass.set_null();
             break;
         case ValuesEnum.DISLIKE:
             this.actionClass.set_like()
             this.actionClass.set_like()
             break;
         case ValuesEnum.NULL:
             this.actionClass.set_like();
             break;
         default:
             this.actionClass.set_like()
             break;

     }
    }

}

export class ClickDislike extends AbstractClickLikeAndDislike implements IAction{

    protected  handler():void
    {
        switch (this.elementPost.get_current_status())
        {
            case ValuesEnum.LIKE:
                this.actionClass.set_dislike();
                this.actionClass.set_dislike();
                break;
            case ValuesEnum.DISLIKE:
                this.actionClass.set_null()
                break;
            case ValuesEnum.NULL:
                this.actionClass.set_dislike();
                break
            default:
                this.actionClass.set_dislike()
                break;
        }
    }

}
