import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import InPartnershipWith from "./components/in-partnership-with";
import SaveMoney from "./components/save-money-on-time";
import Form from "./components/form/index";
import { Link } from "react-router-dom";
import { useStore } from "./store/store";
import { formOneData, formTwoData, formThreeData } from "./store/data";

import "./App.css";
// app change
function App() {
  // const version = useStore((state) => state.questionVersion);

  // const secondQuestion = {
  //   "Food & Drink": {
  //     answers: [
  //       "Restaurant - Quick Service",
  //       "Restaurant - Full Service",
  //       "Bar / Nightclub",
  //       "Food truck",
  //       "Other",
  //     ],
  //     answersValues: [
  //       "Restaurant - Quick Service",
  //       "Restaurant - Full Service",
  //       "Bar / Nightclub",
  //       "Food truck",
  //       "Other",
  //     ],
  //   },
  //   Retail: {
  //     answers: [
  //       "Grocery Store",
  //       "Apparel / Footwear Store",
  //       "Merchandise / Sports Goods Store",
  //       "Liquor Store",
  //       "Salon / Barber",
  //       "Tobacco / Vape Store",
  //       "Other",
  //     ],
  //     answersValues: [
  //       "Grocery Store",
  //       "Apparel / Footwear Store",
  //       "Merchandise / Sports Goods Store",
  //       "Liquor Store",
  //       "Salon / Barber",
  //       "Tobacco / Vape Store",
  //       "Other",
  //     ],
  //   },
  //   Services: {
  //     answers: [
  //       "Auto Services",
  //       "Health and Wellness",
  //       "Professional Services",
  //       "Home Services",
  //       "Event Sevices",
  //       "Other",
  //     ],
  //     answersValues: [
  //       "Auto Services",
  //       "Health and Wellness",
  //       "Professional Services",
  //       "Home Services",
  //       "Event Sevices",
  //       "Other",
  //     ],
  //   },
  //   Other: {
  //     answers: [
  //       "Restaurant or Nightlife",
  //       "Service Business",
  //       "Specialty Stores",
  //       "Grocery & Essentials",
  //       "Hotel, Events, or Venues",
  //       "Other",
  //     ],
  //     answersValues: [
  //       "Restaurant or Nightlife",
  //       "Service Business",
  //       "Specialty Stores",
  //       "Grocery & Essentials",
  //       "Hotel, Events, or Venues",
  //       "Other",
  //     ],
  //   },
  // };

  return (
    <>
      <Header />
      {/* <Form data={formTwoData} /> */}
      <Form data={formOneData} />
      {/* <Routes>
        <Route
          path='/test_industry_advice'
          element={<Form data={formOneData} />}
        />
        <Route
          path='/test_industry_advice_2'
          element={<Form data={formTwoData} />}
        />
        <Route
          path='/test_industry_advice_3'
          element={<Form data={formThreeData} />}
        />
      </Routes> */}
      {/* <div className='fixed bottom-5 left-14'>
        <Link
          className='bg-green-400 px-2 py-1 rounded-sm mr-1'
          to='/test_industry_advice'
        >
          FORM ONE
        </Link>
        <Link
          className='bg-blue-400 px-2 py-1 rounded-sm mr-1'
          to='/test_industry_advice_2'
        >
          FORM TWO
        </Link>
        <Link
          className='bg-blue-600 px-2 py-1 rounded-sm'
          to='/test_industry_advice_3'
        >
          FORM THREE
        </Link>
      </div> */}

      <InPartnershipWith />
      <SaveMoney />
      <Footer />
    </>
  );
}

export default App;
// const formOneData = [
//   {
//     step: 0,
//     question: "How would you like to collect data?",
//     questionValue: "wayToCollectData",
//     answers: [
//       "Swipe card (magnetic strip)",
//       "Biometrics (finger print)",
//       "Web/browers-based (online)",
//       "Unsure, please advise",
//     ],
//     answersValues: ["1-9", "10-24", "25-49", "50-99", "100+"],
//     type: "radio",
//   },
//   {
//     step: 1,
//     question: "How many employees do you have?",
//     questionValue: "numberOfEmployees",
//     answers: [
//       "Less than 10",
//       "10 - 49",
//       "50 - 99",
//       "100 - 250",
//       "More than 250",
//     ],
//     answersValues: ["lessThan10", "10-49", "50-99", "100-200", "moreThan250"],
//     type: "radio",
//   },
//   {
//     step: 2,
//     questionValue: "usersZIP",
//     question:
//       "What is your company's ZIP code? \nWe will help you get accurate quotes for your area",
//     typeOfData: "ZIP",
//     type: "string",
//     placeholder: "e.g. 90001",
//     icon: (
//       <svg
//         focusable='false'
//         aria-hidden='true'
//         viewBox='0 0 24 24'
//         data-testid='LocationOnOutlinedIcon'
//       >
//         <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9'></path>
//         <circle cx='12' cy='9' r='2.5'></circle>
//       </svg>
//     ),
//     quote: "Company ZIP code",
//     regex: /^\d{5}$/,
//   },
//   {
//     step: 3,
//     type: "imageComponent",
//     question: "Hold on - we're finding providers that best match your needs!",
//     // src: gifImage,
//     alt: "image_of_search",
//   },
//   {
//     step: 4,
//     questionValue: "usersEmail",
//     question: "Almost there! \nFill in your last few details to continue.",
//     typeBre: "email",
//     type: "string",
//     placeholder: "e.g. example@email.com",
//     icon: (
//       <svg
//         focusable='false'
//         aria-hidden='true'
//         viewBox='0 0 24 24'
//         data-testid='EmailOutlinedIcon'
//       >
//         <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z'></path>
//       </svg>
//     ),
//     quote: "Email",
//     regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//   },

//   {
//     step: 5,
//     questionValue: "nameAndCompany",
//     question: "Only two steps left",
//     type: "doubleString",
//     typeOfDataOne: "string",
//     typeOfDataTwo: "string",

//     placeholderOne: "e.g. John Doe",
//     placeholderTwo: "e.g. Company Inc.",
//     iconOne: (
//       <svg
//         focusable='false'
//         aria-hidden='true'
//         viewBox='0 0 24 24'
//         data-testid='PersonOutlineIcon'
//       >
//         <path d='M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4'></path>
//       </svg>
//     ),

//     iconTwo: (
//       <svg
//         focusable='false'
//         aria-hidden='true'
//         viewBox='0 0 24 24'
//         data-testid='BusinessOutlinedIcon'
//       >
//         <path d='M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z'></path>
//       </svg>
//     ),
//     quoteOne: "Full Name",
//     quoteTwo: "Company Name",
//     regexOne: /^([a-zA-Z]+)\s+([a-zA-Z]+)$/,
//     regexTwo: /\b\w+\b/,
//   },
//   {
//     step: 4,
//     questionValue: "phone",
//     question: "Final step! What's your phone number?",
//     typeOfData: "phone",
//     type: "string",
//     placeholder: "e.g. 123-456-7890",
//     icon: (
//       <svg
//         className='!h-[22px]'
//         focusable='false'
//         aria-hidden='true'
//         viewBox='0 0 24 24'
//         data-testid='LocalPhoneOutlinedIcon'
//         tabindex='-1'
//         title='LocalPhoneOutlined'
//       >
//         <path d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1'></path>
//       </svg>
//     ),
//     quote: "Phone number",
//     regex: /^\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/,
//   },

//   {
//     step: 7,
//     type: "image",
//     question: "Thank you for submitting form, we will contact you soon!",
//     // src: endImage,
//   },
// ];
