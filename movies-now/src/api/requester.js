export const requester = async (method, url, data) => {
    let options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';

        if (data) {
            options.body = JSON.stringify(data);
        }
    }

    try {
        const res = await fetch(url, options);

        if (res.ok === false) {
            throw new Error(res.statusText);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        alert(error);
    }
}

export const get = requester.bind(null, 'GET');
export const put = requester.bind(null, 'PUT');
export const post = requester.bind(null, 'POST');
export const patch = requester.bind(null, 'PATCH');
export const del = requester.bind(null, 'DELETE');