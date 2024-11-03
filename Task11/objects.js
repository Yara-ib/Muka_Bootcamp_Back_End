// Continue ~ Objects

// Create Objects
const tiles = {
  name: 'Space Light',
  brand: 'Cleopatra',
  category: {
    type: 'Ceramics',
    subCategory: 'Floor Tiles',
  },
  price: 300,
  priceAfterDiscount: function () {
    return (this.price * 85) / 100;
  },
};
console.log(tiles);
console.log(tiles.name);
console.log(tiles.category.type);
console.log(tiles['brand']);
console.log(tiles['category']['subCategory']);
console.log(tiles.priceAfterDiscount());

// Constructor
function Tiles(name, brand, type, subCategory, price) {
  this.name = name;
  this.brand = brand;
  this.type = type;
  this.subCategory = subCategory;
  this.price = price;
}

const tile1 = new Tiles(
  'Space Light',
  'Cleopatra',
  'Ceramics',
  'Floor Tiles',
  200
);
const tile2 = new Tiles('Karen', 'Cleopatra', 'Ceramics', 'Wall Tiles', 300);
const tile3 = new Tiles('Regina', 'Gemma', 'Ceramics', 'Floor Tiles', 350);
console.log(tile1);
console.log(tile2);
console.log(tile3.subCategory);

Tiles.prototype.getShipmentDate = 'In 14 days';
Tiles.prototype.priceAfterDiscount = function () {
  return (this.price * 85) / 100;
};
console.log(tile2);
console.log(tile1.getShipmentDate);
console.log(tile1.priceAfterDiscount());
