
export default function (context) {
    const { store, redirect, route } = context;
    const isLoggedIn = store.getters['auth/isLoggedIn'];
    let isAdm = store.getters['auth/isAdm'];



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