import { TrendingUp } from "@mui/icons-material";
import { Avatar, Box, Card, Container, Grid, styled, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageHeader from "src/components/PageHeader";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import User from "src/models/User";

import React from "react";

type Account = {
    name: string
    networkId: string
    domain: string
    region: string
    csm: string
    dataLocation: string
    creationDate: string
    active: boolean
  }
  
const defaultData: Account[] = [
    {
      name: 'tanner',
      networkId: 'linsley',
      domain: '24',
      region: '100',
      csm: 'In Relationship',
      dataLocation: '50',
      creationDate: '2022-01-01',
      active: true
    }
    // },
    // {
    //   firstName: 'tandy',
    //   lastName: 'miller',
    //   age: 40,
    //   visits: 40,
    //   status: 'Single',
    //   progress: 80,
    // },
    // {
    //   firstName: 'joe',
    //   lastName: 'dirte',
    //   age: 45,
    //   visits: 20,
    //   status: 'Complicated',
    //   progress: 10,
    // },
]
    
const AvatarSuccess = styled(Avatar)(
    ({ theme }) => `
        background-color: ${theme.colors.success.main};
        color: ${theme.palette.success.contrastText};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.success};
  `
  );
function DashboardAccounts() {
    const [data, setData] = React.useState(() => [...defaultData])

    const userData: User = {
        name: 'Tomer & Amit',
        avatar: '/static/images/avatars/1.jpg'
    };
    return (
        <>
            <Helmet>
                <title>Accounts Dashboard</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader user={userData} />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={4}
                    >
                    <Grid item lg={12} xs={12}> 
                        <Card>
                            <Grid spacing={0} container>
                                <Grid item xs={12} md={12}>
                                    <Box p={4}>
                                        {/* <Typography sx={{ pb: 3 }} variant="h4">
                                            Account Balance
                                        </Typography>
                                        <Box>
                                            <Typography variant="h1" gutterBottom>
                                                $54,584.23
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                fontWeight="normal"
                                                color="text.secondary"
                                            >
                                                1.0045983485234 BTC
                                            </Typography>
                                            <Box
                                                display="flex"
                                                sx={{
                                                py: 4
                                                }}
                                                alignItems="center"
                                            >
                                                <AvatarSuccess sx={{ mr: 2 }} variant="rounded">
                                                    <TrendingUp fontSize="large" />
                                                </AvatarSuccess>
                                                <Box>
                                                    <Typography variant="h4">+ $3,594.00</Typography>
                                                    <Typography variant="subtitle2" noWrap>
                                                        this month
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box> */}

                                    </Box>
                                </Grid>
                            </Grid>    
                        </Card>
                    </Grid>  
                </Grid>
            </Container> 
        </>
    )
}

export default DashboardAccounts;
