const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

const getUser = () => {
    const serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        const user = JSON.parse(serializedUser);
        return user;
    }
}

const removeUser = () => localStorage.removeItem('user');

const getAccessToken = () => getUser?.aceessToken;