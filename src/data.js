import airTran from "./Assets/airtran.png"
import britishairway from "./Assets/britishairways.png"
import emirates from "./Assets/emirates.png"
import iran from "./Assets/iranair.png"
import qatar from "./Assets/qatar.jpg"

import fastshipping from "./Assets/fastshipping.png"
import cargo from "./Assets/cargo.png"
import wave from "./Assets/wave.png"
import dafa from "./Assets/dafa.png"
import serviceship from "./Assets/wave.png"

import hawk from "./Assets/hawk.png"
import chisco from "./Assets/chisco.jpg"
import ekeson from "./Assets/ekeson.jpg"
import gigm from "./Assets/gigm.jpg"
import fastbox from "./Assets/fastbox.png"

import dotrails from "./Assets/dotrails.jpg"
import slickrails from "./Assets/slickrails.png"
import slograils from "./Assets/slograils.png"
import tactrails from "./Assets/tactrails.png"
import vectorrails from "./Assets/fastbox.png"


export const airlines = [
    {
        fligthId: 1,
        name: 'Air tran',
        logo: airTran,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 10000000
    },
    {
        fligthId: 2,
        name: 'Air tran',
        logo: airTran,
        departureDate: '08/11/2019',
        departureTime: '3:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 5000
    },
    {
        fligthId: 3,
        name: 'British airways',
        logo: britishairway,
        departureDate: '18/05/2019',
        departureTime: '6:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Lagos',
        landing: 'Abuja',
        price: 800000
    },
    {
        fligthId: 4,
        name: 'British airways',
        logo: britishairway,
        departureDate: '08/11/2019',
        departureTime: '9:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 400000
    },
    {
        fligthId: 5,
        name: 'Emirates',
        logo: emirates,
        departureDate: '04/12/2019',
        departureTime: '6:50pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Lagos',
        landing: 'Abuja',
        price: 14000
    },
    {
        fligthId: 6,
        name: 'Emirates',
        logo: emirates,
        departureDate: '06/18/2019',
        departureTime: '7:50pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 14000
    },
    {
        fligthId: 7,
        name: 'Iran',
        logo: iran,
        departureDate: '06/18/2019',
        departureTime: '7:50pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Lagos',
        landing: 'Abuja',
        price: 100000
    },
    {
        fligthId: 8,
        name: 'Iran',
        logo: iran,
        departureDate: '07/18/2019',
        departureTime: '7:50pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 10000000
    },
    {
        fligthId: 9,
        name: 'qatar',
        logo: qatar,
        departureDate: '07/18/2019',
        departureTime: '7:50pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Lagos',
        landing: 'Abuja',
        price: 10000000
    },
    {
        fligthId: 10,
        name: 'qatar',
        logo: qatar,
        departureDate: '07/18/2019',
        departureTime: '2:50pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 10000000
    },
    {
        fligthId: 11,
        name: 'Iran',
        logo: iran,
        departureDate: '10/10/2023',
        departureTime: '9:00am',
        arrivalDate: '10/10/2023',
        arrivalTime: '10:30am',
        takeOff: 'Enugu',
        landing: 'Kano',
        price: 750000,
    },
    {
        fligthId: 12,
        name: 'Emirates',
        logo: emirates,
        departureDate: '09/15/2023',
        departureTime: '1:30pm',
        arrivalDate: '09/15/2023',
        arrivalTime: '3:00pm',
        takeOff: 'Calabar',
        landing: 'Sokoto',
        price: 550000,
    },
    {
        fligthId: 13,
        name: 'British airways',
        logo: britishairway,
        departureDate: '08/25/2023',
        departureTime: '7:45am',
        arrivalDate: '08/25/2023',
        arrivalTime: '10:00am',
        takeOff: 'Ibadan',
        landing: 'Jos',
        price: 620000,
    },
    {
        fligthId: 14,
        name: 'British airways',
        logo: britishairway,
        departureDate: '07/05/2023',
        departureTime: '4:15pm',
        arrivalDate: '07/05/2023',
        arrivalTime: '5:45pm',
        takeOff: 'Lagos',
        landing: 'Owerri',
        price: 380000,
    },
    {
        fligthId: 15,
        name: 'Iran',
        logo: iran,
        departureDate: '06/20/2023',
        departureTime: '11:00am',
        arrivalDate: '06/20/2023',
        arrivalTime: '12:30pm',
        takeOff: 'Kaduna',
        landing: 'Ekiti',
        price: 450000,
    },
    {
        fligthId: 16,
        name: 'Air Tran',
        logo: airTran,
        departureDate: '07/10/2023',
        departureTime: '8:00am',
        arrivalDate: '07/10/2023',
        arrivalTime: '9:00am',
        takeOff: 'Kaduna',
        landing: 'Ekiti',
        price: 200000,
    },
    {
        fligthId: 17,
        name: 'Iran',
        logo: iran,
        departureDate: '09/12/2023',
        departureTime: '12:00pm',
        arrivalDate: '09/12/2023',
        arrivalTime: '2:00pm',
        takeOff: 'Enugu',
        landing: 'Kano',
        price: 300000,
    },
    {
        fligthId: 18,
        name: 'Iran',
        logo: iran,
        departureDate: '10/20/2023',
        departureTime: '4:30pm',
        arrivalDate: '10/20/2023',
        arrivalTime: '5:30pm',
        takeOff: 'Calabar',
        landing: 'Sokoto',
        price: 550000,
    },
]




export const ships = [
    {
        fligthId: 1,
        name: 'fastshipping',
        logo: fastshipping,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 5000
    },
    {
        fligthId: 2,
        name: 'fastshipping',
        logo: fastshipping,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Osun',
        landing: 'Kano',
        price: 6000
    },
    {
        fligthId: 3,
        name: 'cargo',
        logo: cargo,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 3000
    },
    {
        fligthId: 4,
        name: 'cargo',
        logo: cargo,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 12000
    },
    {
        fligthId: 5,
        name: 'wave',
        logo: wave,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Kano",
        price: 800
    },
    {
        fligthId: 6,
        name: 'wave',
        logo: wave,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Osun',
        landing: 'Awka',
        price: 12000
    },
    {
        fligthId: 7,
        name: 'dafa',
        logo: dafa,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Osun",
        price:6000
    },
    {
        fligthId: 8,
        name: 'dafa',
        logo: dafa,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Abuja',
        landing: 'Osun',
        price: 56000
    },
    {
        fligthId: 9,
        name: 'serviceship',
        logo: serviceship,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 50700
    },
    {
        fligthId: 10,
        name: 'serviceship',
        logo: serviceship,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 32000
    },
    {
        fligthId: 11,
        name: 'Fast Shipping',
        logo: fastshipping,
        departureDate: '07/15/2023',
        departureTime: '10:00am',
        arrivalDate: '07/15/2023',
        arrivalTime: '12:00pm',
        takeOff: 'Ondo',
        landing: 'Katsina',
        price: 6000,
    },
    {
        fligthId: 12,
        name: 'Cargo',
        logo: cargo,
        departureDate: '08/10/2023',
        departureTime: '3:00pm',
        arrivalDate: '08/10/2023',
        arrivalTime: '5:00pm',
        takeOff: 'Anambra',
        landing: 'Zamfara',
        price: 12000,
    },
    {
        fligthId: 13,
        name: 'Wave',
        logo: wave,
        departureDate: '09/20/2023',
        departureTime: '1:00pm',
        arrivalDate: '09/20/2023',
        arrivalTime: '4:00pm',
        takeOff: 'Kogi',
        landing: 'Kano',
        price: 10000,
    },
    


]






export const cars = [
    {
        fligthId: 1,
        name: 'hawk',
        logo: hawk,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 5000
    },
    {
        fligthId: 2,
        name: 'hawk',
        logo: hawk,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 4000
    },
    {
        fligthId: 3,
        name: 'chisco',
        logo: chisco,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 5000
    },
    {
        fligthId: 4,
        name: 'chisco',
        logo: chisco,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Ibadan',
        landing: 'Awka',
        price: 2000
    },
    {
        fligthId: 5,
        name: 'ekeson',
        logo: ekeson,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 9000
    },
    {
        fligthId: 6,
        name: 'ekeson',
        logo: ekeson,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Lagos',
        landing: 'Osun',
        price: 7000
    },
    {
        fligthId: 7,
        name: 'gigm',
        logo: gigm,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Imo",
        landing: "Abuja",
        price: 12000
    },
    {
        fligthId: 8,
        name: 'gigm',
        logo: gigm,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Lagos',
        landing: 'Awka',
        price: 5000
    },
    {
        fligthId: 9,
        name: 'fastbox',
        logo: fastbox,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 3500
    },
    {
        fligthId: 10,
        name: 'fastbox',
        logo: fastbox,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 50900
    },
    {
        fligthId: 11,
        name: 'Hawk',
        logo: hawk,
        departureDate: '08/15/2023',
        departureTime: '9:30am',
        arrivalDate: '08/15/2023',
        arrivalTime: '11:30am',
        takeOff: 'Ogun',
        landing: 'Sokoto',
        price: 7000,
    },
    {
        fligthId: 12,
        name: 'Chisco',
        logo: chisco,
        departureDate: '09/10/2023',
        departureTime: '1:00pm',
        arrivalDate: '09/10/2023',
        arrivalTime: '4:00pm',
        takeOff: 'Ondo',
        landing: 'Zamfara',
        price: 4000,
    },
    {
        fligthId: 13,
        name: 'Ekeson',
        logo: ekeson,
        departureDate: '10/20/2023',
        departureTime: '5:00pm',
        arrivalDate: '10/20/2023',
        arrivalTime: '7:00pm',
        takeOff: 'Kwara',
        landing: 'Kogi',
        price: 8000,
    },

]



export const trains = [
    {
        fligthId: 1,
        name: 'vectorrails',
        logo: vectorrails,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 5060
    },
    {
        fligthId: 2,
        name: 'vectorrails',
        logo: vectorrails,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'abuja',
        landing: 'Awka',
        price: 4000
    },
    {
        fligthId: 3,
        name: 'tactrails',
        logo: tactrails,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 5000
    },
    {
        fligthId: 4,
        name: 'tactrails',
        logo: tactrails,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Enugu',
        landing: 'Awka',
        price: 45000
    },
    {
        fligthId: 5,
        name: 'slograils',
        logo: slograils,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Enugu",
        price: 10500
    },
    {
        fligthId: 6,
        name: 'slograils',
        logo: slograils,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Abuja',
        landing: 'Awka',
        price: 5080
    },
    {
        fligthId: 7,
        name: 'slickrails',
        logo: slickrails,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Abuja",
        price: 50070
    },
    {
        fligthId: 8,
        name: 'slickrails',
        logo: slickrails,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 5678
    },
    {
        fligthId: 9,
        name: ' dotrails',
        logo: dotrails,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: "Lagos",
        landing: "Ibuja",
        price: 5000
    },
    {
        fligthId: 10,
        name: ' dotrails',
        logo: dotrails,
        departureDate: '11/11/2019',
        departureTime: '2:20pm',
        arrivalDate: '11/11/2019',
        arrivalTime: '2:20pm',
        takeOff: 'Porthacourt',
        landing: 'Awka',
        price: 12000
    },
    {
        fligthId: 11,
        name: 'Vector Rails',
        logo: vectorrails,
        departureDate: '07/15/2023',
        departureTime: '10:00am',
        arrivalDate: '07/15/2023',
        arrivalTime: '12:00pm',
        takeOff: 'Ondo',
        landing: 'Katsina',
        price: 7000,
    },
    {
        fligthId: 12,
        name: 'Tact Rails',
        logo: tactrails,
        departureDate: '08/10/2023',
        departureTime: '3:00pm',
        arrivalDate: '08/10/2023',
        arrivalTime: '5:00pm',
        takeOff: 'Anambra',
        landing: 'Zamfara',
        price: 12000,
    },
    {
        fligthId: 13,
        name: 'Slog Rails',
        logo: slograils,
        departureDate: '09/20/2023',
        departureTime: '1:00pm',
        arrivalDate: '09/20/2023',
        arrivalTime: '4:00pm',
        takeOff: 'Kogi',
        landing: 'Kano',
        price: 10000,
    },

]

