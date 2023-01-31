import {AbstractRequest} from "./AbstractRequest";

export class XHR extends AbstractRequest{


    private xhr : XMLHttpRequest
    constructor(url:string)
    {
        super(url);
        this.xhr = new XMLHttpRequest();
    }

    send_post()
    {
        this.xhr.open('POST', this.url, true);
        this.xhr.setRequestHeader("Content-Type",  'application/x-www-form-urlencoded; charset=UTF-8');
        this.xhr.onreadystatechange = ()=>
        {
            if(this.xhr.readyState == 4 && this.xhr.status == 200)
            {
                this.callback(this.xhr.responseText);
            }
        }
        console.log(this.data)
        this.xhr.send(this.data);
    }

    send_get()
    {
        console.log('send_get')
    }

    public set_data(data:object):void
    {

        // @ts-ignore
       this.data =  Object.entries(data)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");
    };
    set_callback(callback: (response:string) => (void | null)) {
        this.callback=callback;
    }
}