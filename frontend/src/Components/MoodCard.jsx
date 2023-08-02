import {Box, Button, Card, CardContent, Typography} from "@mui/material";

export const MoodCard = ({mood}) => {
    return (
        <Card sx={{display: 'flex', margin: "5% 5% 5% 5%", width: "50%", padding: "1rem"}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1'}}>
                    <Typography component="div" variant="h5">
                        Date: {mood.moodDate}
                    </Typography>
                    <Typography component="div" variant="subtitle1">
                        Mood rate: {mood.moodRate}
                    </Typography>
                    <Typography component="div" variant="subtitle1">
                        Description: {mood.moodDescription}
                    </Typography>
                    <Typography component="div" variant="subtitle1">
                        Music: {mood.moodMusic}
                    </Typography>
                    <Typography component="div" variant="subtitle1">
                        Picture: {mood.moodPicture}
                    </Typography>
                </CardContent>
            </Box>
            <Button sx={{color: "pink"}}> Update </Button>
        </Card>
    )
}