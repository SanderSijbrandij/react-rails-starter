// Run this example by adding <%= javascript_pack_tag 'react_client' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(
      <h1>Hello World!</h1>
    ,
    document.body.appendChild(document.createElement('div')))
})
