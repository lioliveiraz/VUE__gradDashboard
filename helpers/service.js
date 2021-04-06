import VueJwtDecode from 'vue-jwt-decode'


export function isUserAdm(token){
    if(token){
const {role} = VueJwtDecode.decode(token)
return role[0]==="ADM"
    }

}

