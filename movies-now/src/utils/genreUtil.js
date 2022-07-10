export const toggleActiveStyle = (selected, genre) => {
    if (selected === genre) {
        return "mv-li-item actv"
    }
    return "mv-li-item";
}