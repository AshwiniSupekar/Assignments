class Address {

  constructor(street, apartment, zipcode, city) {
    this.street = street;
    this.apartment = apartment;
    this.zipcode = zipcode;
    this.city = city;
  }

  get fullAddress() {
    var a = '';
    a += this.street + ' - Apt. ' + this.apartment + '\n'
    a += this.city + ', ' + this.zipcode + ' CA'

    return a
  }

}
