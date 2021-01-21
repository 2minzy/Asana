import Hero from 'components/Hero';
import Content from 'components/Content';
import { useStreamQuery, Stream } from 'lib/graphql/stream.graphql';
import styled from 'styled-components';

const Container = styled.div`
  margin: 160px 80px;
  text-align: center;

  @media ${({ theme }) => theme.device.mobile} {
    margin: 80px 10px;
    text-align: center;
  }
`;

export default function StreamDetail({ id }) {
  const { data, loading } = useStreamQuery({
    variables: { streamId: id },
  });

  if (!loading && data && data.stream) {
    return (
      <Container>
        <Hero stream={data.stream as Stream} />
        <Content url={data.stream.url} />
      </Container>
    );
  }

  return null;
}

StreamDetail.getInitialProps = ({ query: { id } }) => {
  return { id };
};
