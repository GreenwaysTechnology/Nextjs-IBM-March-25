// export default function AuthLayout({ children }) {
//     return <div id="authLayout">
//         {children}
//     </div>
// }

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Auth Domain</h1>
                {children}
            </body>
        </html>
    );
}
