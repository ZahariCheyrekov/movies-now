import { INVALID_PASSWORD_LENGTH_MESSAGE, PASSWORDS_MUST_MATCH_MESSAGE } from '../messages/alertMessages';

export const passwordLengthValidator = (pass) => {
    if (pass.length < 6) {
        alert(INVALID_PASSWORD_LENGTH_MESSAGE);
        return false;
    }
    return true;
}

export const passwordEqualityValidator = (pass, repass) => {
    if (pass !== repass) {
        alert(PASSWORDS_MUST_MATCH_MESSAGE);
        return false;
    }
    return true;
}