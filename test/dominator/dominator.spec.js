var expect = require('chai').expect;
var solution = require('../../src/dominator/dominator');

describe('should pass through basic test', function () {
    it('some intput', function (done) {
        var input = [3, 4, 3, 2, 3, -1, 3, 3] ;
        var expectedOutput = 7;
        expect(solution(input)).to.equal(expectedOutput);

        done();
    });
    it('one element input', function (done) {
        var input = [1];
        var expectedOutput = 0;
        expect(solution(input)).to.equal(expectedOutput);

        done();
    });

    it('no leader', function (done) {
        var input = [1, 3, 4, 6, 9];
        var expectedOutput = -1;
        expect(solution(input)).to.equal(expectedOutput);

        done();
    });

    it('even number of elements', function (done) {
        var input = [1, 2, 3, 3, 3];
        var expectedOutput = 4;
        expect(solution(input)).to.equal(expectedOutput);
        
        done();
    });

    it('no dominator just half occurances', function (done) {
        var input = [1, 3, 2, 3];
        var expectedOutput = -1;
        expect(solution(input)).to.equal(expectedOutput);

        done();
    });
});
