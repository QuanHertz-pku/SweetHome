import $ from "jquery";

class Sender {
    constructor() {
        this.base_url = "http://localhost:8081";
    }

    get(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: this.base_url + url,
                method: "GET",
                success: (resp) => {
                    resolve(resp);
                },
                error: (err) => {
                    reject(err);
                }
            });
        });
    }

    post(url,data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: this.base_url + url,
                method: "POST",
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: (resp) => {
                    resolve(resp);
                },
                error: (err) => {
                    reject(err);
                }
            });
        });
    }
}

export default Sender;