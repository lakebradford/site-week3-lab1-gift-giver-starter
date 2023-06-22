const express = require("express");
const router = express.Router();
const serverData = require("../server")

router.get("/", (request, response) => {
    const jsonInformation  = serverData.getServerData 
    response.json(users);
});

router.post("/pairs" ,async (request, response)=>{
    response.status(200).json(request.body.names)
})

router.post("/traditional" ,async (request, response)=>{
    response.status(200).json(request.body.names)
})

module.exports = router;