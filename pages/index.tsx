import { Container, Typography, Box, Button } from '@material-ui/core';
import Link from 'next/link';

export default function Index() {
  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Next.js Example
        </Typography>
        <Link href='/about'>
          <Button variant='contained' color='primary'>
            Go to the About page
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
