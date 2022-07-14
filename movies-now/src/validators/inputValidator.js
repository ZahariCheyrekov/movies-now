import { ALL_FIELDS_ARE_REQUIRED_MESSAGE } from "../messages/alertMessages";

export const inputValidator = (data) => {
    if (Object.values(data).some(x => x.trim() === '')) {
        alert(ALL_FIELDS_ARE_REQUIRED_MESSAGE);
        return false;
    }

    return true;
}