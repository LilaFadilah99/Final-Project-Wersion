function getWhyJoinUs(payload) {
    return {
        type: 'whyJoinUs/getWhyJoinUs', 
        payload: payload
    }
}

function getservices(payload) {
  return {
    type: 'services/getservices',
    payload: payload
  }
}

export function fetchWhyJoinUs() {
    console.log("Action fetchWhyJoinUs Terpanggil")
    return async dispatch => {
        fetch('https://pickled-capricious-beak.glitch.me/join')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          dispatch(getWhyJoinUs(data))
        })
        .catch(error => {
          console.log(error)
        });
    }
}

export function fetchServices() {
    console.log("Action fetchServices Terpanggil")
    return async dispatch => {
        fetch('https://pickled-capricious-beak.glitch.me/product-description')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          dispatch(getservices(data))
        })
        .catch(error => {
          console.log(error)
        });
    }
}

