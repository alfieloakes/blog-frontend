import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Header from '../components/header';


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-100 text-gray-800 dark:bg-black dark:text-white">
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;