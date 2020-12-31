export const goToMain = (history) => {
    history.push("/");
};
export const goToFinish = (history) => {
    history.push("/cliente");
}
export const goBack = (history) => {
    history.goBack();
}



