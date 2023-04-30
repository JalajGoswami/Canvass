const reducers = {

    setSystemTheme: (state, { payload }) => {
        state.systemTheme = payload
    },

    setAppTheme: (state, { payload }) => {
        state.appTheme = payload != 'system'
            ? payload : null
    },

}

export default { reducers }