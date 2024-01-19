//Task 2

const reqDefine = async () => {
    setTimeout(()=> {
        console.log("pizzadelivery");
    },2000);
};
const order = async () => {
    setTimeout(()=> {
        console.log("pizza is order");
    },2000);
};
const payment = async () => {
    setTimeout(()=> {
        console.log("check the payment");
    },2000);
};
const summaryPamyent = async () => {
    setTimeout(()=> {
        console.log("customer is summaryPamyent");
    },2000);
};
const UpdateVoilet = async () => {
    setTimeout(()=> {
        console.log("customer is UpdateVoilet");
    },2000);
};
const pizzadelivery = async () => {
    try{
        await reqDefine();
        await order();
        await payment();
        await summaryPamyent();
        await UpdateVoilet();
    }catch{
        console.log("Error");
    }finally{
        setTimeout(()=> {
        console.log("Finally"); 
    },2000);
}
};
pizzadelivery();