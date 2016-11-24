/*jshint esversion: 6 */

const assert = require('chai').assert;
const stringcheck = require('../index');

describe('date tests', function() {
    it('date 1', function() {
        const input = '11.06.1993';
        assert.equal(stringcheck.date(input), input);
    });
    it('date 2', function() {
        const input = '11/06/1993';
        assert.equal(stringcheck.date(input), input);
    });
    it('date error 1', function() {
        const input = '11/065/1993';
        assert.equal(stringcheck.date(input), false);
    });
});

describe('urls tests', function() {
    it('url 1', function() {
        const input = 'https://www.google.de';
        assert.equal(stringcheck.url(input), input);
    });
    it('url 2', function() {
        const input = 'http://www.google.de';
        assert.equal(stringcheck.url(input), input);
    });
    it('url 3', function() {
        const input = 'http://google.de';
        assert.equal(stringcheck.url(input), input);
    });
    it('url error 1', function() {
        const input = 'htp://www.google.de';
        assert.equal(stringcheck.url(input), false);
    });
    it('url error 2', function() {
        const input = 'http:/google.de';
        assert.equal(stringcheck.url(input), false);
    });
});

describe('username tests', function() {
    it('username 1', function() {
        const input = 'fadlia';
        assert.equal(stringcheck.username(input), input);
    });
    it('username 2', function() {
        const input = '5100036';
        assert.equal(stringcheck.username(input), input);
    });
    it('username 3', function() {
        const input = '0014ad';
        assert.equal(stringcheck.username(input), input);
    });
    it('username 4', function() {
        const input = '00';
        assert.equal(stringcheck.username(input), input);
    });
    it('username error 1', function() {
        const input = 'abdsdf#asd';
        assert.equal(stringcheck.username(input), false);
    });
    it('username error 2', function() {
        const input = '!?';
        assert.equal(stringcheck.username(input), false);
    });
    it('username error 3', function() {
        const input = 'rSiSiiS';
        assert.equal(stringcheck.username(input), false);
    });
});

describe('password tests', function() {
    it('password 1', function() {
        const input = 'asdfAIsas_asd+';
        assert.equal(stringcheck.password(input), input);
    });
    it('password 2', function() {
        const input = '45asdf';
        assert.equal(stringcheck.password(input), input);
    });
    it('password 3', function() {
        const input = '4534435';
        assert.equal(stringcheck.password(input), input);
    });
    it('password error 2', function() {
        const input = '_';
        assert.equal(stringcheck.password(input), false);
    });
});

describe('email tests', function() {
    it('email 1', function() {
        const input = 'john@hummel.de';
        assert.equal(stringcheck.email(input), input);
    });
    it('email 2', function() {
        const input = 'john@hummel.com';
        assert.equal(stringcheck.email(input), input);
    });
    it('email error 1', function() {
        const input = '@hummel.com';
        assert.equal(stringcheck.email(input), false);
    });
    it('email error 2', function() {
        const input = 'john.hummel.com';
        assert.equal(stringcheck.email(input), false);
    });
});

describe('ipv4 tests', function() {
    it('ipv4 1', function() {
        const input = '173.194.76.94';
        assert.equal(stringcheck.ipv4(input), input);
    });
    it('ipv4 2', function() {
        const input = '192.168.1.1';
        assert.equal(stringcheck.ipv4(input), input);
    });
    it('ipv4 3', function() {
        const input = '127.0.0.1';
        assert.equal(stringcheck.ipv4(input), input);
    });
    it('ipv4 error 1', function() {
        const input = '127.0.01';
        assert.equal(stringcheck.ipv4(input), false);
    });
    it('ipv4 error 2', function() {
        const input = '192.168.1.*';
        assert.equal(stringcheck.ipv4(input), false);
    });
    it('ipv4 error 3', function() {
        const input = '473.194.76.94';
        assert.equal(stringcheck.ipv4(input), false);
    });
});

describe('integer tests', function() {
    it('integer 1', function() {
        const input = '456';
        assert.equal(stringcheck.integer(input), input);
    });
    it('integer 2', function() {
        const input = 456;
        assert.equal(stringcheck.integer(input), input);
    });
    it('integer 3', function() {
        const input = Number.MAX_SAFE_INTEGER;
        assert.equal(stringcheck.integer(input), input);
    });
    it('integer 4', function() {
        const input = Number.MAX_SAFE_INTEGER;
        assert.equal(stringcheck.integer(input), input);
    });
    it('integer error 1', function() {
        const input = 'a45';
        assert.equal(stringcheck.integer(input), false);
    });

    it('integer error 2', function() {
        const input = 45231.052;
        assert.equal(stringcheck.integer(input), false);
    });
});

describe('positiveInteger tests', function() {
    it('positiveInteger 1', function() {
        const input = '456';
        assert.equal(stringcheck.positiveInteger(input), input);
    });
    it('positiveInteger 2', function() {
        const input = 456;
        assert.equal(stringcheck.positiveInteger(input), input);
    });
    it('positiveInteger error 1', function() {
        const input = -456;
        assert.equal(stringcheck.positiveInteger(input), false);
    });
    it('positiveInteger error 2', function() {
        const input = 0;
        assert.equal(stringcheck.positiveInteger(input), false);
    });
    it('positiveInteger error 3', function() {
        const input = -1325;
        assert.equal(stringcheck.positiveInteger(input), false);
    });
    it('positiveInteger error 4', function() {
        const input = 8531.452;
        assert.equal(stringcheck.positiveInteger(input), false);
    });
});

describe('negativeInteger tests', function() {
    it('negativeInteger 1', function() {
        const input = '-456';
        assert.equal(stringcheck.negativeInteger(input), input);
    });
    it('negativeInteger 2', function() {
        const input = -456;
        assert.equal(stringcheck.negativeInteger(input), input);
    });
    it('negativeInteger error 1', function() {
        const input = 456;
        assert.equal(stringcheck.negativeInteger(input), false);
    });
    it('negativeInteger error 2', function() {
        const input = 0;
        assert.equal(stringcheck.negativeInteger(input), false);
    });
    it('negativeInteger error 3', function() {
        const input = 1325;
        assert.equal(stringcheck.negativeInteger(input), false);
    });
    it('negativeInteger error 4', function() {
        const input = -8531.452;
        assert.equal(stringcheck.negativeInteger(input), false);
    });
});

describe('positiveOrNegativeNumber tests', function() {
    it('positiveOrNegativeNumber 1', function() {
        const input = '456';
        assert.equal(stringcheck.positiveOrNegativeNumber(input), input);
    });
    it('positiveOrNegativeNumber 2', function() {
        const input = 456;
        assert.equal(stringcheck.positiveOrNegativeNumber(input), input);
    });
    it('positiveOrNegativeNumber 3', function() {
        const input = Number.MAX_SAFE_INTEGER;
        assert.equal(stringcheck.positiveOrNegativeNumber(input), input);
    });

    it('positiveOrNegativeNumber 4', function() {
        const input = 45231.052;
        assert.equal(stringcheck.positiveOrNegativeNumber(input), input);
    });
    it('positiveOrNegativeNumber error 1', function() {
        const input = 'a45';
        assert.equal(stringcheck.positiveOrNegativeNumber(input), false);
    });
    it('positiveOrNegativeNumber error 2', function() {
        const input = 0;
        assert.equal(stringcheck.positiveOrNegativeNumber(input), false);
    });
});

describe('positiveNumber tests', function() {
    it('positiveNumber 1', function() {
        const input = '456';
        assert.equal(stringcheck.positiveNumber(input), input);
    });
    it('positiveNumber 2', function() {
        const input = 456;
        assert.equal(stringcheck.positiveNumber(input), input);
    });
    it('positiveNumber 3', function() {
        const input = 8531.452;
        assert.equal(stringcheck.positiveNumber(input), input);
    });
    it('positiveNumber 4', function() {
        const input = 08531.452;
        const output = 8531.452;
        assert.equal(stringcheck.positiveNumber(input), output);
    });
    it('positiveNumber error 1', function() {
        const input = -456;
        assert.equal(stringcheck.positiveNumber(input), false);
    });
    it('positiveNumber error 2', function() {
        const input = 0;
        assert.equal(stringcheck.positiveNumber(input), false);
    });
    it('positiveNumber error 3', function() {
        const input = -1325;
        assert.equal(stringcheck.positiveNumber(input), false);
    });
});

describe('negativeNumber tests', function() {
    it('negativeNumber 1', function() {
        const input = '-456';
        assert.equal(stringcheck.negativeNumber(input), input);
    });
    it('negativeNumber 2', function() {
        const input = -456;
        assert.equal(stringcheck.negativeNumber(input), input);
    });
    it('negativeNumber 3', function() {
        const input = -8531.842;
        assert.equal(stringcheck.negativeNumber(input), input);
    });
    it('negativeNumber error 1', function() {
        const input = 456;
        assert.equal(stringcheck.negativeNumber(input), false);
    });
    it('negativeNumber error 2', function() {
        const input = 0;
        assert.equal(stringcheck.negativeNumber(input), false);
    });
    it('negativeNumber error 3', function() {
        const input = 1325;
        assert.equal(stringcheck.negativeNumber(input), false);
    });
});

describe('phoneNumber tests', function() {
    it('phoneNumber 1', function() {
        const input = 01575634555;
        assert.equal(stringcheck.phoneNumber(input), input);
    });
    it('phoneNumber 2', function() {
        const input = 015756345;
        assert.equal(stringcheck.phoneNumber(input), input);
    });
    it('phoneNumber 3', function() {
        const input = '01575634555';
        assert.equal(stringcheck.phoneNumber(input), input);
    });
    it('phoneNumber error 1', function() {
        const input = 1575.6345;
        assert.equal(stringcheck.phoneNumber(input), false);
    });
    it('phoneNumber error 2', function() {
        const input = 1575.6345;
        assert.equal(stringcheck.phoneNumber(input), false);
    });
    it('phoneNumber error 2', function() {
        const input = '157563d45';
        assert.equal(stringcheck.phoneNumber(input), false);
    });
});

describe('hex tests', function() {
    it.skip('hex 1', function() {});
    it.skip('hex 2', function() {});
    it.skip('hex error 1', function() {});
});

describe('newLine tests', function() {
    it('newLine 1', function() {
        const input = '\n';
        assert.equal(stringcheck.phoneNumber(input), input);
    });
    it('newLine error 1', function() {
        const input = 'asdf\n';
        assert.equal(stringcheck.phoneNumber(input), false);
    });
});
