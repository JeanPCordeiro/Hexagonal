import { performLogic } from '../domain/logic.js';

function executeService(input) {
    return performLogic(input);
}

module.exports = { executeService };

