export default async function ({ store }) {
    const token = await store.state.auth.token;
    const id = await store.state.auth.user_id;
    await store.dispatch('courses/fetchCourses', { token });
    await store.dispatch('courses/fetchScores', { id, token });

}