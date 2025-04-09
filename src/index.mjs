import pkg from './application/service.js';
const { executeService } = pkg;

exports.handler = async (event) => {
    const input = event.queryStringParameters.input;
    const result = executeService(input);

    return {
        statusCode: 200,
        body: JSON.stringify({ result }),
    };
};

