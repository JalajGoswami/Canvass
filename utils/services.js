import { showToast } from "Components/Common/StyledToast"

export function errorReducer(state, { error }) {
    state.error = error
    state.loading = false
    showToast(error)
}