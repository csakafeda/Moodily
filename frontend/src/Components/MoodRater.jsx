import {Rating, styled} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied.js";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied.js";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied.js";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined.js";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied.js";
import PropTypes from "prop-types";

export const StyledRating = styled(Rating)(({theme}) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

export const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error"/>,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error"/>,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning"/>,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success"/>,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success"/>,
        label: 'Very Satisfied',
    },
};

export function IconContainer(props) {
    const {value, ...other} = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};