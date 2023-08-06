import styled from 'styled-components';
import { useQuery } from 'react-query';
import FundingCard from '../Components/FundingCard';
import Header from '../Components/Header';
import { getFunding } from '../apis/FundingApi';

const Padding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Width = styled.div`
  padding: 50px 0px;
  width: 1000px;
`;

const PageContainer = styled.div`
  padding-bottom: 30px;
`;

const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;

const Detail = styled.div`
  font-size: 18px;
  display: flex;
`;
const Num = styled(Detail)`
  color: red;
`;

const Funds = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

function Home() {
  const { isLoading, data: funds } = useQuery(['funding'], () => getFunding(), {
    onSuccess: (data) => {
      console.log('Funding data:');
      console.log(data);
    },
  });

  return (
    <>
      <Header />
      <Padding>
        <Width>
          <PageContainer>
            <Title> 현재 진행 중인 펀딩 </Title>
            <Detail>
              <Num>{funds?.length}</Num> 개의 프로젝트가 있습니다.
            </Detail>
          </PageContainer>
          <Funds>
            <Grids>
              {funds?.map((fund) => (
                <FundingCard key={fund.funding_id} fund={fund} />
              ))}
            </Grids>
          </Funds>
        </Width>
      </Padding>
      {/* <CreateButton roomId={roomId} room_name={room?.room_name} /> */}
      {/* <Footer /> */}
    </>
  );
}
export default Home;
