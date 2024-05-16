export const gaurdNagativeToZero = (num:number) => {
    if (num < 0) {
        return 0;
    } else {
        return num;
    }
}