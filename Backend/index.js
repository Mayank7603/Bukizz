import express from "express"
import { db } from "./connect.js"
import cors from "cors"
const app = express();

app.use(
    cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hi Mayank Saini")
})

app.post("/formData", (req, res) => {

    console.log(req.body);

    const q = "INSERT INTO contact_data (fname,lname,email,schoolName,msg) VALUES (?)";
    const values = req.body;

    db.query(q, values, (err, data) => {
        if (err) res.status(200).json()
    })
    res.send("post req")
})

app.listen(3000, () => {
    console.log("Listening on port ", 3000);
})