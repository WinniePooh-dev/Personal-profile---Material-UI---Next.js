import { LayOut } from "../components/layout";

import classes from "../styles/home.module.css";

export default function Index() {
    return (
        <LayOut className={classes} title={'Home'}>
            <h1 className={classes.title}>You are on the home page! Please register or log into your account if you have one ...</h1>
            <svg className={classes.mountains} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f3f4f5" fillOpacity="1" d="M0,192L288,128L576,224L864,160L1152,0L1440,96L1440,320L1152,320L864,320L576,320L288,320L0,320Z"/>
            </svg>
        </LayOut>
    )
}