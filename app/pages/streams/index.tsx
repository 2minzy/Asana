import { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Posts from 'components/Posts';
import { useStreamsQuery, Stream } from 'lib/graphql/streams.graphql';
import styled from 'styled-components';

const Container = styled.div`
  margin: 100px 20px;
`;

export default function Streams() {
  const { data, loading, refetch } = useStreamsQuery({ errorPolicy: 'ignore' });

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
    </Container>
  );
}
