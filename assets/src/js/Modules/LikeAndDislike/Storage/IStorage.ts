
export interface IStorage{

    set_value(id:number,value:number|null|string):void;
    get_value(id:number):number|null;
}

