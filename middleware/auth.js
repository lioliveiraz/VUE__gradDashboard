
export default function (context) {
    const { store, redirect, route } = context;
    const isLoggedIn = store.getters['auth/isLoggedIn'];

    if (isLoggedIn && route.name === "index") {
        return redirect('graduate/dashboard');
    }
    if (!isLoggedIn && route.name !== "index") {
        return redirect('/');

    }
}