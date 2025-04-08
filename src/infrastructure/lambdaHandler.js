const { executeService } = require('../application/service');

exports.handler = async (event) => {
    const input = event.queryStringParameters.input;
    const result = executeService(input);

    return {
        statusCode: 200,
        body: JSON.stringify({ result }),
    };
};

