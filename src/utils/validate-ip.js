const errorMessage = 'You have entered an invalid IP address!';

const validateIPp = (ip) => {
    const regExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if ( regExp.test(ip) ) {
        return true;
    } else {
        alert(errorMessage);
        return false;
    }
};

export {validateIPp};
