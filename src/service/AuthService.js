import axios from 'axios';

const baseUrl = 'https://kwb5dwcul7.execute-api.ap-southeast-1.amazonaws.com/default';

export const login = (credential) => {
    return axios.post(`${baseUrl}/service-providers/login`, credential, {
        validateStatus: (status) => status === 200
    });
};
