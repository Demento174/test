export const settings = {
  "selectors":
  {
    "scroll": ".btn_scroll",
    "counter":".counter",
    'wrapperMap':'#map',
    'accordion':
        {
          'wrapper':".dual-frame__accordion",
          'item':".dual-frame__accordion-item",
          'title':".js-accordion-title",
          'activeTitle':".dual-frame__accordion-title_open",
          'bodyWrapper':".dual-frame__accordion-body",
          "body":".dual-frame__accordion-content"
        },

  },
  "options":
  {
    "scroll":
      {
        "speed": "smooth"
      },
    "wrapperMap":
        {
          "content":"Нажмите что бы воспользоваться картой"
        },
    'accordion':
        {
          "activeItem":"active",
          "activeTitle":"dual-frame__accordion-title_open"
        },
      "fancybox":
          {
              selector:'.fancybox',
              selectorGallery:'data-fancybox-wrapper',
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
          }
  }
}

export const  formConfig =
    {
        'selectors' :
            {
                'forms':'form._form',
                'send':'.send',
                'response':'.response',
            },
        'action': 'send_form',
        'recaptcha':
            {
                'switch':true,
                'sitekey':'6LfDdCYdAAAAAGj9_-KN-ZuokcUutq0lSosV1xlZ',
                'token':'6LfDdCYdAAAAADnmcjh63Qdph5fApeg58dcW8aYG'
            }
    };