"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pr = new Promise((resolve, reject) => {
    let pizzadelivery = true;
    if (pizzadelivery) {
        resolve("pizza is ready");
    }
    else {
        reject("pizza is not ready");
    }
});
const order = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("pizza is order");
    }, 2000);
});
const payment = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("check the payment");
    }, 2000);
});
const summaryPayment = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("customer is summaryPamyent");
    }, 2000);
});
const UpdateVoilet = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("customer is UpdateVoilet");
    }, 2000);
});
pr
    .then((res) => {
    console.log(res);
    return order;
})
    .then((res) => {
    console.log(res);
    return payment;
})
    .then((res) => {
    console.log(res);
    return summaryPayment;
})
    .then((res) => {
    console.log(res);
    return UpdateVoilet;
})
    .catch((res) => {
    console.log(res);
})
    .finally(() => {
    console.log("Finally");
});
