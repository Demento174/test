import {IStorage} from "./IStorage";
import {Cookies} from "../../Cookies";

export class CookieStorage implements IStorage{
    private readonly cookieName :string;
    private readonly _classCookie:Cookies;

    constructor(cookieName:string)
    {
        this.cookieName = cookieName;
        this._classCookie = new Cookies();
    }

    private get_data():any
    {

        if(undefined === this._classCookie.get_cookie(this.cookieName))
            return null;
        return JSON.parse(this._classCookie.get_cookie(this.cookieName));
    }

    private save_data(data:{[key:string]:number|string}):void
    {
        this._classCookie.setCookie(this.cookieName,JSON.stringify(data));
    }

    set_value(id: number, value: number | null|string)
    {

        let data = this.get_data();
        if(null === data)
        {
            let new_data :
                {
                    [key:string]:number|string
                }={};

            new_data[id] = value;

            this.save_data(new_data);

            data = this.get_data();
        }
        data[id]=value;
        this.save_data(data);
    }

    get_value(id: number): number | null
    {
        let data = this.get_data();
        if(null===data)
            return null;
        return id in data?data[id]:null;

    }

}