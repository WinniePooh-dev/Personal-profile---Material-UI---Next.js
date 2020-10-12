import { Button, withStyles } from '@material-ui/core';
import Link from 'next/link';
import { LayOut } from '../../components/layout';

const styles = {
    button: {
        backgroundColor: '#01BDA7',
        '&:hover': {
            backgroundColor: 'rgba(1, 189, 167, .8)'
        }
    }
}

const Login = ({ classes }) => {
    return (
        <LayOut title={'Log In | Registration'}>
            <Link href={'/log-in/profile'}>
                <Button variant="contained" color="primary" size="large" className={classes.button}> 
                    Log In
                </Button>
            </Link>
        </LayOut>
    )
}

export default withStyles(styles)(Login);