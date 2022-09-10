function Logout() {
    localStorage.clear();
    window.location.pathname = "/";
}

export default Logout