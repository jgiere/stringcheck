// Copyright (C) 2016  Johannes Giere
// The Regex expressions have been published by Luke Hass (https://github.com/lukehaas/RegexHub) under the MIT license.
/*jshint esversion: 6 */

module.exports = {
    date: (input) => {
        const reg = /^([1-9]|0[1-9]|[12][0-9]|3[01])\D([1-9]|0[1-9]|1[012])\D(19[0-9][0-9]|20[0-9][0-9])$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    url: (input) => {
        const reg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    username: (input) => {
        const reg = /^[a-z0-9_-]{3,16}$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    password: (input) => {
        const reg = /^[A-Za-z0-9+_-]{6,18}$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    email: (input) => {
        const reg = /^([a-z0-9+_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,24})$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    ipv4: (input) => {
        const reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    integer: (input) => {
        const reg = /^-?\d+$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    positiveInteger: (input) => {
        const reg = /^\d+$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    negativeInteger: (input) => {
        const reg = /^-\d+$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    positiveOrNegativeNumber: (input) => {
        const reg = /^-?\d*\.?\d+$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    positiveNumber: (input) => {
        const reg = /^\d*\.?\d+$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    negativeNumber: (input) => {
        const reg = /^-\d*\.?\d+$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    phoneNumber: (input) => {
        const reg = /^\+?[\d\s]{3,}$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    hex: (input) => {
        const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    },
    newLine: (input) => {
        const reg = /[\r\n]|$/;
        const result = reg.exec(input);
        return result === null ? false : result[0];
    }
};
