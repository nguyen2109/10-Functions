'use strict';

const vna = {
  airline: 'VietNameAirLine',
  iataCode: 'VNA',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} đã đặt 1 ghế ngồi trên ${this.airline} - ${this.iataCode}-${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}-${flightNum}`, name });
  },
};

vna.book(123, 'Nguyên');
console.log(vna);
