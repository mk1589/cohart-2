const express = require("express")
const zod = require("zod")

const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/numkid" , function(req, res){
    const kid = req.body.kid;
    const response = schema.safeParse(kid)
    res.send({
        response
    })
})


app.listen(3000);
