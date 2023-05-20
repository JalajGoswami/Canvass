import { showToast } from "Components/Common/StyledToast"
import API from "./API"

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

export const successReducer = (fieldName, withLoading = true) => (
    function (state, { payload }) {
        state[fieldName] = payload
        if (withLoading)
            state.loading = false
    }
)

export async function updateTags(data) {
    try {
        await API('/tag/update-tags').post(data)
    }
    catch (err) { showToast(err?.message) }
}