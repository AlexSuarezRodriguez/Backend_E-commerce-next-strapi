module.exports = {
  routes: [
    {
      method: "POST",
      path: "/payment-order",
      handler: "order.paymentOrder",// se ejecuta la funciona paymentOrder uqe esta dentro del controlador
    },
  ],
};
