
const  setEmail = email => {
    localStorage.setItem('email', JSON.stringify(email));
};

const getEmail = () => {
    return JSON.parse(localStorage.getItem('email'));
};

const removeEmail = () => {
    removeItem('email');
};


export default { setEmail, getEmail, removeEmail };