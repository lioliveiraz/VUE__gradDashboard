import VueJwtDecode from 'vue-jwt-decode';


export function isUserAdm(token) {
    if (token) {
        const { role } = VueJwtDecode.decode(token);
        return role[0] === "ADM";
    }

}

export function isObjectEmpty(object) {
    return Object.entries(object).length === 0;

}

export function isObjectValuesEmpty(obj) {
    const validInputs = Object.values(obj).filter(el => el !== "");
    return validInputs;
}

