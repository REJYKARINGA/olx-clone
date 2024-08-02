import img1 from '../assets/product images/1.webp';
import img2 from '../assets/product images/2.webp';
import img3 from '../assets/product images/3.webp';
import img4 from '../assets/product images/4.webp';
import img5 from '../assets/product images/5.webp';
import img6 from '../assets/product images/6.jpg';
import img7 from '../assets/product images/7.jpg';
import img8 from '../assets/product images/8.webp';
import img9 from '../assets/product images/9.webp';
import img10 from '../assets/product images/10.jpg';
import img11 from '../assets/product images/11.webp';
import img12 from '../assets/product images/12.webp';
import img13 from '../assets/product images/13.jpg';
import img14 from '../assets/product images/14.webp';
import img15 from '../assets/product images/15.webp';
import img16 from '../assets/product images/16.jpg';
import img17 from '../assets/product images/17.webp';
import img18 from '../assets/product images/18.webp';
import img19 from '../assets/product images/19.webp';
import img20 from '../assets/product images/20.webp';
// import img21 from '../assets/product images/21.webp';
// import img22 from '../assets/product images/22.webp';
// import img23 from '../assets/product images/23.webp';
// import img24 from '../assets/product images/24.webp';
// import img25 from '../assets/product images/25.webp';
// import img26 from '../assets/product images/26.webp';
// import img27 from '../assets/product images/27.webp';


const products = {
  cars: [
    // {
    //   id: 1,
    //   title: "Toyota Corolla 2015",
    //   specs: "Mileage: 50,000 km, Fuel: Petrol, Transmission: Automatic",
    //   price: 8000,
    //   daysUploaded: "3 days ago",
    //   place: "Kolkata, West Bengal",
    //   image: img1
    // },
    {
      id: 2,
      title: "Honda Civic 2018",
      specs: "Mileage: 30,000 km, Fuel: Petrol, Transmission: Manual",
      price: 12000,
      daysUploaded: "1 month ago",
      place: "Mumbai, Maharashtra",
      image: img2
    },
    {
      id: 3,
      title: "Ford Mustang 2016",
      specs: "Mileage: 40,000 km, Fuel: Petrol, Transmission: Automatic",
      price: 20000,
      daysUploaded: "Yesterday",
      place: "Chennai, Tamil Nadu",
      image: img3
    },
    // {
    //   id: 4,
    //   title: "Chevrolet Cruze 2017",
    //   specs: "Mileage: 35,000 km, Fuel: Diesel, Transmission: Manual",
    //   price: 10000,
    //   daysUploaded: "Today",
    //   place: "Pune, Maharashtra",
    //   image: img4
    // },
    {
      id: 5,
      title: "BMW 3 Series 2019",
      specs: "Mileage: 20,000 km, Fuel: Petrol, Transmission: Automatic",
      price: 25000,
      daysUploaded: "5 days ago",
      place: "Kolkata, West Bengal",
      image: img5
    },
    {
      id: 6,
      title: "Audi A4 2018",
      specs: "Mileage: 25,000 km, Fuel: Diesel, Transmission: Automatic",
      price: 23000,
      daysUploaded: "2 days ago",
      place: "Mumbai, Maharashtra",
      image: img6
    },
    {
      id: 7,
      title: "Mercedes-Benz C-Class 2017",
      specs: "Mileage: 28,000 km, Fuel: Petrol, Transmission: Automatic",
      price: 27000,
      daysUploaded: "1 week ago",
      place: "Chennai, Tamil Nadu",
      image: img7
    }
  ],
  motorbikes: [
    {
      id: 8,
      title: "Yamaha R15 V3",
      specs: "Mileage: 15,000 km, Fuel: Petrol, Transmission: Manual",
      price: 1500,
      daysUploaded: "3 days ago",
      place: "Bhubaneshwar, Odisha",
      image: img8
    },
    {
      id: 9,
      title: "Honda CBR 250R",
      specs: "Mileage: 20,000 km, Fuel: Petrol, Transmission: Manual",
      price: 1800,
      daysUploaded: "1 month ago",
      place: "Hyderabad, Telangana",
      image: img9
    },
    {
      id: 10,
      title: "Royal Enfield Classic 350",
      specs: "Mileage: 25,000 km, Fuel: Petrol, Transmission: Manual",
      price: 2000,
      daysUploaded: "Yesterday",
      place: "Chandigarh, Punjab",
      image: img10
    },
    {
      id: 11,
      title: "Bajaj Pulsar NS200",
      specs: "Mileage: 10,000 km, Fuel: Petrol, Transmission: Manual",
      price: 1200,
      daysUploaded: "Today",
      place: "Nashik, Maharashtra",
      image: img11
    }
  ],
  phones: [
    {
      id: 12,
      title: "iPhone X",
      specs: "Storage: 64GB, Color: Space Gray, Condition: Used",
      price: 500,
      daysUploaded: "3 days ago",
      place: "Kolkata, West Bengal",
      image: img12
    },
    {
      id: 13,
      title: "Samsung Galaxy S10",
      specs: "Storage: 128GB, Color: Black, Condition: Used",
      price: 400,
      daysUploaded: "1 month ago",
      place: "Mumbai, Maharashtra",
      image: img13
    },
    {
      id: 14,
      title: "OnePlus 7 Pro",
      specs: "Storage: 256GB, Color: Almond, Condition: Used",
      price: 450,
      daysUploaded: "Yesterday",
      place: "Chennai, Tamil Nadu",
      image: img14
    },
    // {
    //   id: 4,
    //   title: "Google Pixel 3",
    //   specs: "Storage: 64GB, Color: White, Condition: Used",
    //   price: 350,
    //   daysUploaded: "Today",
    //   place: "Pune, Maharashtra",
    //   image: img15
    // },
    {
      id: 15,
      title: "Xiaomi Mi 9",
      specs: "Storage: 128GB, Color: Blue, Condition: Used",
      price: 300,
      daysUploaded: "5 days ago",
      place: "Kolkata, West Bengal",
      image: img16
    }
  ],
  rentalHouses: [
    {
      id: 16,
      title: "1BHK for Rent in Pune",
      specs: "Area: 500 sq.ft, Bedrooms: 1, Bathrooms: 1",
      price: 15000,
      daysUploaded: "3 days ago",
      place: "Pune, Maharashtra",
      image: img17
    },
    {
      id: 17,
      title: "2BHK for Rent in Chennai",
      specs: "Area: 1000 sq.ft, Bedrooms: 2, Bathrooms: 2",
      price: 25000,
      daysUploaded: "1 month ago",
      place: "Chennai, Tamil Nadu",
      image: img18
    },
    {
      id: 18,
      title: "3BHK for Rent in Kolkata",
      specs: "Area: 1500 sq.ft, Bedrooms: 3, Bathrooms: 2",
      price: 30000,
      daysUploaded: "Yesterday",
      place: "Kolkata, West Bengal",
      image: img19
    },
    {
      id: 19,
      title: "1BHK for Rent in Mumbai",
      specs: "Area: 600 sq.ft, Bedrooms: 1, Bathrooms: 1",
      price: 20000,
      daysUploaded: "5 days ago",
      place: "Mumbai, Maharashtra",
      image: img20
    }
  ],
  
  commercialVehicles: [],
  // clothes: [
  //   {
  //     id: 1,
  //     title: "Men's Leather Jacket",
  //     specs: "Size: L, Color: Black, Material: Leather",
  //     price: 100,
  //     daysUploaded: "3 days ago",
  //     place: "Kolkata, West Bengal",
  //     image: "https://example.com/leather-jacket.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "Women's Summer Dress",
  //     specs: "Size: M, Color: Floral, Material: Cotton",
  //     price: 50,
  //     daysUploaded: "1 month ago",
  //     place: "Mumbai, Maharashtra",
  //     image: "https://example.com/summer-dress.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "Men's Formal Suit",
  //     specs: "Size: M, Color: Navy Blue, Material: Wool",
  //     price: 150,
  //     daysUploaded: "Yesterday",
  //     place: "Chennai, Tamil Nadu",
  //     image: "https://example.com/formal-suit.jpg"
  //   }
  // ],
  // houses: [
  //   {
  //     id: 1,
  //     title: "3BHK Apartment in Kolkata",
  //     specs: "Area: 1500 sq.ft, Bedrooms: 3, Bathrooms: 2",
  //     price: 80000,
  //     daysUploaded: "3 days ago",
  //     place: "Kolkata, West Bengal",
  //     image: "https://example.com/3bhk-kolkata.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "2BHK Apartment in Mumbai",
  //     specs: "Area: 1200 sq.ft, Bedrooms: 2, Bathrooms: 2",
  //     price: 100000,
  //     daysUploaded: "1 month ago",
  //     place: "Mumbai, Maharashtra",
  //     image: "https://example.com/2bhk-mumbai.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "4BHK Villa in Chennai",
  //     specs: "Area: 2500 sq.ft, Bedrooms: 4, Bathrooms: 3",
  //     price: 150000,
  //     daysUploaded: "Yesterday",
  //     place: "Chennai, Tamil Nadu",
  //     image: "https://example.com/4bhk-villa.jpg"
  //   }
  // ],
  // scooters: [
  //   {
  //     id: 1,
  //     title: "Honda Activa 5G",
  //     specs: "Mileage: 5,000 km, Fuel: Petrol, Transmission: Automatic",
  //     price: 700,
  //     daysUploaded: "Today",
  //     place: "Pune, Maharashtra",
  //     image: "https://example.com/honda-activa.jpg"
  //   }
  // ],
  
};


export default products