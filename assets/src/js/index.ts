import '../less/style.less'
import './Modules/LikeAndDislike/Init'
import {init} from '../js/Modules/LikeAndDislike/Init';
init();

// import lazyload from 'lazyload'


// new lazyload(document.querySelectorAll('img'),{
//     root: null,
//     rootMargin: "0px",
//     threshold: 0
// });

document.addEventListener('DOMContentLoaded', function(){
    if(window. innerWidth >767)
    {
        document.querySelectorAll('.post_preview').forEach(
            el =>{


                // @ts-ignore
                el.querySelector('.image').style.height = el.querySelector('.description').offsetHeight+'px';
            });
    }

});

