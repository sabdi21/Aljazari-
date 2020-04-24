import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
    <Head>
        <title>Aljazrai</title>
        <link rel="stylesheet"
        href="https://bootswatch.com/4/united/bootstrap.min.css" />
    </Head>
    <Navbar/>
    <div className="container">
    {props.children}
    </div>

    </div>
);

export default Layout