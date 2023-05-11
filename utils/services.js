export function pendingReducer(state) {
    state.error = null
}

export function loadingReducer(state) {
    state.error = null
    state.loading = true
}

export function errorReducer(state, { error }) {
    state.error = error?.message ?? error
    state.loading = false
}