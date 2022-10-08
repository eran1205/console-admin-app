import { Box, Container, Card, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import AccountsStats from './AccountsStats';
import UsersStats from './UsersStats';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from 'src/components/PageHeader';
import User from 'src/models/User';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  const userData: User = {
      name: 'Tomer & Amit',
      avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <>
        <Helmet>
        <title>CHEQ - Admin Console</title>
        </Helmet>
        <PageTitleWrapper>
          <PageHeader user={userData} />
        </PageTitleWrapper>
        {/* <Container maxWidth="lg">
          <Box display="flex" justifyContent="center" py={5} alignItems="center">
            <Logo />
          </Box>
          <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
            <Hero />
          </Card>
        </Container> */}
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
          <Grid item xs={12}>
            <AccountsStats />
          </Grid>
          <Grid item xs={12}>
            <UsersStats />
          </Grid>
        </Grid>
        </Container>
    </>
  );
}

export default Overview;
