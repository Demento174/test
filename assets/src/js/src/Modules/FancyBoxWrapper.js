// import { fancyBoxConfig } from "../settings";
import AddHandlerForEvent from "../Controllers/AddHandlerForEvent";
import $ from "jquery";
import fancybox from '@fancyapps/fancybox';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';

/***
 * fancyBoxConfig =
 {
        selector:'.fancybox',
        selectorGallery:'[data-fancybox-wrapper]',
        classNameZoom:'icon_zoom',
        options:
            {
                type:'image',
                opts:
                    {
                        modal:true,
                        showCloseButton:true,
                        hideOnContentClick:true,
                    },

            },
    };
 */


export default class FancyBoxWrapper {
    constructor(fancyBoxConfig)
    {
        // fancybox($);
        this.selector = fancyBoxConfig.selector;
        this.classNameZoom = fancyBoxConfig.classNameZoom;
        this.selectorGallery = fancyBoxConfig.selectorGallery
        this.settings = fancyBoxConfig.options;


        this.elements = this.selector;
        this.galleryElements = fancyBoxConfig.selectorGallery;

        if(this.elements.length > 1)
        {
            this.handler();
        }

        if(this.galleryElements.length > 0)
        {
            this.handlerGallery()
        }

    }


    set elements (value)
    {
        this._elements = document.querySelectorAll(value);
    }

    get elements ()
    {
        return this._elements;
    }

    set galleryElements (selector)
    {
        this._galleryElements = document.querySelectorAll(`[${selector}]`);
    }

    get galleryElements ()
    {
        return this._galleryElements;
    }


    handler()
    {


        this.elements.forEach(item=>{
            new AddHandlerForEvent(item,'click',(e)=>{

                e.preventDefault();
                // this.settings.href=image.src;
                $.fancybox.open(item,this.settings);

            })
        });

    }

    handlerGallery()
    {

        this.galleryElements.forEach(item=>{

            item.querySelectorAll('a').forEach(element=>{

                element.classList.add(this.classNameZoom);
                console.log(item);
                element.setAttribute('data-fancybox',item.getAttribute(this.selectorGallery));
                element.setAttribute('rel', 'gallery');
                element.setAttribute('data-type', 'image');

                new AddHandlerForEvent(element ,'click',e=>{
                    e.preventDefault();
                    $.fancybox.open( $(`[data-fancybox=${item.getAttribute(this.selectorGallery)}][data-index="${element.getAttribute('data-index')}"]`),this.settings);

                });

            });

        });
    }
}