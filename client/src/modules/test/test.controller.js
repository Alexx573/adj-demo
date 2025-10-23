const TestController = {};
const ENV = import.meta.env;

constAPI_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

TestController.callToAPI = async () => {
    await fetch(`${API_URL}/test`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }).then(response => res.json()).then(res =>{
        console.log(res);
    }).catch(console.log);  
};
export default TestController;