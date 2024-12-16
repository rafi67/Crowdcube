
const  setEmail = email => {
    localStorage.setItem('email', JSON.stringify(email));
};

const getEmail = () => {
    return JSON.parse(localStorage.getItem('email'));
};

const removeEmail = () => {
    localStorage.removeItem('email');
};


export default { setEmail, getEmail, removeEmail };