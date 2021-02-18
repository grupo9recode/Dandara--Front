
const Sair = () => {
    localStorage.removeItem('key');
    window.location.href='/';
};

export default Sair;