export class Cookies{

    get_cookie(name:string):string
    {
        const value = `; ${document.cookie}`;

        const parts = value.split(`; ${name}=`);

        if (parts.length === 2)
            return parts.pop().split(';').shift();
    }

    check_cookie(name:string):boolean
    {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return !!match;
    }

    setCookie(cName:string, cValue:string, expDays:number=30):void
    {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
}