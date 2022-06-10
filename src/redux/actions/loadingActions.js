export const loadingActions={
    setIsLoading:'SET_IS_LOADING'
}
export const setIsLoading = isloading => ({
    type: loadingActions.setIsLoading,
    payload: isloading
})
