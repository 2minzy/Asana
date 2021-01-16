import { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import Posts from 'components/Posts';
import { useStreamsQuery, Stream } from 'lib/graphql/streams.graphql';
import styled from 'styled-components';

const Container = styled.div`
  margin: 160px 80px;
  text-align: center;

  a {
    text-decoration: none;
    color: red;
  }
`;

const Description = styled.div`
  font-size: 1.2rem;
`;

export default function Streams() {
  const { data, loading, refetch } = useStreamsQuery({ errorPolicy: 'ignore' });
  console.log(data);
  useEffect(() => {
    refetch();
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant='h4'>Streams</Typography>
      </Box>
      {!loading && data && data.streams && (
        <Posts streams={data.streams as Stream[]} />
      )}

      {!loading && data && data.streams.length === 0 && (
        <>
          <Description>
            Create your own meditaion stream collection!
          </Description>
          <Link href='/streams/new'>
            <a>Create new stream</a>
          </Link>
        </>
      )}

      {!loading && !data && (
        <>
          <Description>
            Join us! <br />
            Share your favorite meditation streaming content!
          </Description>
          {}
          <Link href='/auth/signup'>
            <a>Sign Up </a>
          </Link>
          or
          <Link href='/auth/signin'>
            <a> Sign In</a>
          </Link>
        </>
      )}
    </Container>
  );
}
