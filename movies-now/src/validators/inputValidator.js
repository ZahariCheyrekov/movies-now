export const inputValidator = (data) => {
    if (Object.values(data).some(x => x.trim() === '')) {
        return false;
    }

    return true;
}