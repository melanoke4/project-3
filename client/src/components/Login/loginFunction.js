const login = () => {
    Axios({
        method: "POST",
        data: {
            username: loginUsername,
            password: loginPassword,
        },
        withCredentials: true,
        url: "http://localhost:3000/login",
    }).then(data => {
        if (data.status === 200) {
            history.push("/");
            console.log('Successfully Login');
        }
    });
};