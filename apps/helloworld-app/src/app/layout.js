


// export default function RootLayout(props) {

//   return <html lang="en">
//        <body>
//          {/* Insert Page */}
//           {props.children}
//        </body>
//   </html>
// }

export default function RootLayout({ children }) {

    return <html lang="en">
      <body>
        {/* Insert Page */}
        {children}
      </body>
    </html>
  }