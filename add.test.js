var utils  = require('course-utilities');
var testadd = utils.load('./addfolder/add.js', 'adding' );
describe("Testing the add function", () => {
  it('correct addition', () => {
    expect(testadd(1,3)).toBe(4);
  });
  it('correct wording', () => {
    expect(testadd("Java","Script")).toBe("JavaScript");
  });
})
