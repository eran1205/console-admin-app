import { Avatar, Box, Button, Card, CardContent, Grid, styled, Typography } from "@mui/material";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const AvatarWrapper = styled(Avatar)(
    ({ theme }) => `
      margin: ${theme.spacing(2, 0, 1, -0.5)};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacing(1)};
      padding: ${theme.spacing(0.5)};
      border-radius: 60px;
      height: ${theme.spacing(5.5)};
      width: ${theme.spacing(5.5)};
      background: ${theme.colors.alpha.trueWhite[30]};
    
      img {
        background: ${theme.colors.alpha.trueWhite[100]};
        padding: ${theme.spacing(0.5)};
        display: block;
        border-radius: inherit;
        height: ${theme.spacing(4.5)};
        width: ${theme.spacing(4.5)};
      }
  `
  );
function AccountsStats() {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                pb: 3
                }}
            >
                <Typography variant="h3">Account Stats</Typography>
                <Button
                    size="small"
                    variant="outlined"
                    startIcon={<AddTwoToneIcon fontSize="small" />}
                    >
                    Add new account
                </Button>
            </Box>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6} md={4} item>
                    <Card sx={{ px: 1}}>
                        <CardContent>
                        <AvatarWrapper>
                            <img
                            alt="BTC"
                            src="/static/images/placeholders/logo/bitcoin.png"
                            />
                        </AvatarWrapper>
                        <Typography variant="h5" noWrap>
                            Bitcoin
                        </Typography>
                        <Typography variant="subtitle1" noWrap>
                            BTC
                        </Typography>
                        <Box
                            sx={{
                            pt: 3
                            }}
                        >
                            <Typography variant="h3" gutterBottom noWrap>
                            $3,586.22
                            </Typography>
                            <Typography variant="subtitle2" noWrap>
                            1.25843 BTC
                            </Typography>
                        </Box>
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

export default AccountsStats;