import {isUserAdm} from '../helpers/service.js'

export default function (context) {
    const { store, redirect, route } = context;
    const isLoggedIn = store.getters['auth/isLoggedIn'];
    const token = store.getters['auth/getToken']
    const isAdm = isUserAdm(token);
  


    if (isLoggedIn && route.name === "index" && !isAdm) {

        return redirect('graduate/dashboard');
    }
    else if (isLoggedIn && route.name === "index" && isAdm) {

        return redirect('/adm/dashboard');
    }
    else if (isLoggedIn && route.name.includes("graduate") && isAdm) {

        return redirect('/adm/dashboard');
    }
    else if (isLoggedIn && route.name.includes("adm") && !isAdm) {

        return redirect('/graduate/dashboard');
    }

    else if (!isLoggedIn && route.name !== "index") {
        return redirect('/');

    }
}