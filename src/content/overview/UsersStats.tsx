import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function UsersStats() {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ pb: 3 }}
            >
                <Typography variant="h3">Users Stats</Typography>
                <Button
                    size="small"
                    variant="outlined"
                    startIcon={<AddTwoToneIcon fontSize="small" />}>
                        Add new user
                </Button>
            </Box>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6} md={4} item>
                    <Card sx={{ px: 1}}>
                        <CardContent>
                        </CardContent>
                    </Card>    
                </Grid>
                <Grid xs={12} sm={6} md={4} item>
                    <Card sx={{ px: 1}}>
                        <CardContent>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} item>
                    <Card sx={{ px: 1}}>
                        <CardContent>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default UsersStats;