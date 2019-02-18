const should = require("should");

const {filter} = require("./exercise");

const settings = [
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
];

const components1 = [
  {
    "name": "audio"
  },
  {
    "name": "LED array"
  }
];

const components2 = [
  {
    "name": "LED array"
  }
];

describe("exercise", () => {

    it("Should Work", () => {

        let res = filter(settings, components1);
        res.length.should.equal(3);
        res = filter(settings, components2);
        res.length.should.equal(1);

    });

});
