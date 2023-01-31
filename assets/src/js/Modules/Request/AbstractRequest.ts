import './IRequest';
export abstract class AbstractRequest implements IRequest{
    protected callback: (responseText: string)=>void | null;
    protected url:string;
    protected data: FormData|string|any;
    protected constructor(url:string)
    {

        this.url = url;

    }
    abstract send_post():void;
    abstract send_get():void;

    public abstract set_data(data:Object):void;
    public abstract set_callback(callback:(response:string) => (void | null)):void;
}

