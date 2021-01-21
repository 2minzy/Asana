import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import Posts from 'components/Posts';
import { useStreamsQuery, Stream } from 'lib/graphql/streams.graphql';
import styled from 'styled-components';

const Container = styled.div`
  margin: 160px 80px;
  text-align: center;

  @media ${({ theme }) => theme.device.mobile} {
    margin: 80px 10px;
    text-align: center;
  }
`;

const Info = styled.div`
  a {
    text-decoration: none;
    color: red;
  }
`;

const Title = styled.div`
  font-size: 1.8rem;
`;

const Description = styled.div`
  font-size: 1.2rem;
`;

export default function Streams() {
  const { data, loading, refetch } = useStreamsQuery({ errorPolicy: 'ignore' });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Title>My Streams</Title>
      </Box>
      {!loading && data && data.streams && (
        <Posts streams={data.streams as Stream[]} />
      )}

      {!loading && data && data.streams.length === 0 && (
        <Info>
          <Description>
            Create your own meditaion stream collection!
          </Description>
          <Link href='/streams/new'>
            <a>Create new stream</a>
          </Link>
        </Info>
      )}

      {!loading && !data && (
        <Info>
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
        </Info>
      )}
    </Container>
  );
}
