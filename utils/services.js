export function errorReducer(state, { error }) {
    state.error = error
    state.loading = false
}