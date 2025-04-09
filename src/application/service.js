import pkg from '../domain/logic.js';
const { performLogic } = pkg;

function executeService(input) {
    return performLogic(input);
}

module.exports = { executeService };

