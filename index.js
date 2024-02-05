// template_u7h4a3h -- template id 
// service_cj21lld  -- service id 
// RRGoQFjdBVXElmRTD -- API key - Public key

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_cj21lld',
            'template_u7h4a3h',
            event.target, 
            'RRGoQFjdBVXElmRTD'
    ).then(() => {console.log('works1')})
}
