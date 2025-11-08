
const TestController = {};
const Env = import.meta.env;

const API_URL = `http://${Env.VITE_API_HOST}:${Env.VITE_API_PORT}${Env.VITE_API_BASE}`;

TestController.callToAPI = async () => {
    await fetch(`${API_URL}/test`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(res => {
        console.log(res);
    }).catch(console.log);
}

export default TestController;