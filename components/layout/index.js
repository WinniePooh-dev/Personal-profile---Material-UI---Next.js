import { Paper } from "@material-ui/core";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Link from 'next/link';

import classes from '../../styles/layout.module.css';
import { Loading } from "../loading";

export const LayOut = ({ children, title = "App Profile", auth = "Log In | Registration" }) => {
    
    const [content, setContent] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setContent(children)
        }, 3000);
    }, [])

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
            </Head>
            <>
                <nav className={classes.wave}>
                    <Link href={"/log-in"}>
                        <a>{auth}</a>
                    </Link>
                </nav>
                <svg className={classes.svg} viewBox="0 0 1481 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H1481V470C1114.99 -38.4972 367.553 634.454 0 401.971V0Z" fill="url(#paint0_linear)"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="1481" y1="235.001" x2="-15.6763" y2="235.001" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2196F3"/>
                            <stop offset="1" stopColor="#1EC3AF"/>
                        </linearGradient>
                    </defs>
                </svg>
            </>
            <main className={classes.main}>
                <Paper elevation={3}>
                    <Loading isLoad={content}/>
                </Paper>
            </main>
        </Fragment>
    )
}