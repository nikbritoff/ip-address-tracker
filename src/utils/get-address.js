const apiUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_MvbbLKPVMo1vlZm8xAZwrFpENjwFr&ipAddress=';

const getAddress = async (ip = '') => {
    const responce = await fetch(`${apiUrl}${ip}`)
        .then((responce) => responce.json());

    return responce;
}

export {getAddress};
