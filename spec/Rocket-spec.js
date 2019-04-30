var RocketType = require('../NodeTypes/Rocket');

describe("Rocket Type", () => {
    it("should have a name equal Rocket", () => {
        var rocket = RocketType;
        expect(rocket.name).toBe('Rocket')
    })
});