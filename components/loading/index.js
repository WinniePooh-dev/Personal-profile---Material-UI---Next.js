import { withStyles, LinearProgress } from "@material-ui/core";

const LoadProgressBar = withStyles({
    colorPrimary: {
        height: 7,
        backgroundColor: '#1a78c2'
    },
    barColorPrimary: {
        backgroundColor: '#0a97a1'
    }
})(LinearProgress);

export const Loading = ({ isLoad }) => {
    return isLoad ?? <LoadProgressBar/>
}