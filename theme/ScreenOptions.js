export const noHeader = {
    header: () => null
}

export const FadeInTransition = {
    cardStyleInterpolator: ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        }
    })
}