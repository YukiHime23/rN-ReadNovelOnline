export function fetch(url, data, isAuth) {
  let headers = null;
  if (isAuth) {
    headers = {
      Authorization: 'Bearer ',
    };
  }

  return instance
    .get(url, {
      params: {
        ...data,
      },
      headers,
    })
    .then(response => response.data)
    .catch(error => error);
}

export function post(url, data, isAuth) {
  let headers = null;
  if (isAuth) {
    headers = {
      Authorization: 'Bearer ',
    };
  }

  return instance
    .post(
      url,
      { ...data },
      {
        headers,
      }
    )
    .then(response => {
      response.data;
    })
    .catch(error => error);
}