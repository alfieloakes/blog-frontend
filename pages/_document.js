import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from '../components/header';
import Footer from '../components/footer';


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-100 text-gray-800 dark:bg-black dark:text-white">
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;