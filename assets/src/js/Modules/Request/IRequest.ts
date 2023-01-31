"use strict";

interface IRequest{

    send_post():void;
    send_get():void;
    set_data(data:Object):void;
    set_callback(callback:(response:string)=>void|null):void;

}

