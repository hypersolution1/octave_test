const express = require("express"),
    app = express(),
    port = 3000,


    settings = [
        {
            "name": "Mixer",
            "requires": [
                "audio",
                "pcb"
            ]
        },
        {
            "name": "AttractLoop",
            "requires": []
        },
        {
            "name": "Volume",
            "requires": ["audio"]
        },
        {
            "name": "setting1",
            "requires": ["comp1"]
        }
    ],

    components = [
        {
            "name": "audio"
        },
        {
            "name": "LED array"
        }
    ],


    {filter} = require("./exercise");

app.get("/settings", (req, res) => {

    res.end(JSON.stringify(filter(settings, components), null, 4));

});

app.listen(port, () => { });
