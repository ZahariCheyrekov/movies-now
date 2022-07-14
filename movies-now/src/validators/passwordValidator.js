export const passwordValidator = (pass, repass) => {
    return pass.trim() === repass.trim();
}