# Info
Created via express-generator to host a simple static HTML page, with css and js.
The original page is grabbed from request in browser

https://paynow.sandbox.fatzebra.com.au/v2/TESTzipmoney/6e52c121-ebe9-4bb8-ada1-c20f1cbe8829/AUD/100/db19e30e52653afc4827911c03a85dea?tokenize_only=true&postmessage=true&refetch=true&hide_button=true&masterpass=false&visacheckout=false&iframe=true&show_extras=false&show_email=false&l=v2&&css=https://static.zipmoney.com.au/hpp/hpp.fz.v1.css&css_signature=21583f9f9c5b9e98460739d5dd990273&return_target=_self

So we can apply new css style and retain all javascript functions. However, in integration/deploy/test stage, depends on how we work with Fatzebra, things are aiming to change.
Include the additional css: https://static.zipmoney.com.au/hpp/hpp.fz.v1.css

## Run
Entry point: http://localhost:3000/index.html
