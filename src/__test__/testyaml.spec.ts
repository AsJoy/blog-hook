import yaml = require("js-yaml");
import fs = require("fs");
import path = require("path");


describe('test yaml', () => {
  it('should be equal', function () {
    const res = fs.readFileSync(path.resolve(__dirname, './test.yaml'), 'utf-8')

    const doc = yaml.loadAll(res)

    // console.log(doc)
    expect(doc.length).toBe(1)
    expect(doc[0][0].test('qweqwe')).toBe(true)
    expect(true).toBe(true)
  });
})
