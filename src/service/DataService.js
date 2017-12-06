class DataService {
  getData(dataUrl) {
    return fetch(dataUrl, {
      method: 'GET',
      headers: {
				'Content-type': 'application/json'
			}
    }).then(response => response.json())
    .then(json => json)
  }

  addToCart(requestBody) {
    let formData = ''

    for (let name in requestBody) {
      formData += `${name}=${requestBody[name]}&`
    }
    formData = formData.substring(0, formData.length-1)

    return fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
				'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: formData   
    }).then(response => response.json())
    .then(json => json)
  }

  removeFromCart(id) {
    return fetch(`http://localhost:3000/cart/${id}`, {
      method: 'DELETE',
      headers: {
				'Content-type': 'application/json'
			}
    }).then(response => response.json())
    .then(json => json)
  }
}

export default new DataService()