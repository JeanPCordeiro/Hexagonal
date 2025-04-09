import { performLogic } from '../domain/logic';

function executeService(input) {
    return performLogic(input);
}

module.exports = { executeService };

