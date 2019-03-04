import axios from "axios";

export default {
    charaters: {
        fetchAll: () => axios.get("/api/charater").then(res => res.data),
        create: character =>
            axios.post("api/charater", { character }).then(res => res.data)

    }
};