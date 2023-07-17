import styled from 'styled-components';
// import FundingCard from '../components/FundingCard';
import { useQuery } from 'react-query';
// import { getRoom } from '../apis/fundingApi';
import { useParams } from 'react-router-dom';
import FundingCard from '../Components/FundingCard';
import Header from '../Components/Header';
// import CreateButton from '../components/CreateButton';
// import Footer from '../components/Footer';

const funds = [
  {
    fundingId: 0,
    category: '향수',
    title: '먹을 때 말고 진짜 복숭아 옆에서 나는 온전한 향기',
    fund_img:
      'https://tumblbug-pci.imgix.net/4f7b81d5f6644ab0546c1550830b087fee9731e2/6d96486eda9aeed19ff48263811af14e12ab5851/3e8b00b5282d8efe78860ae55991e2fda667b7a2/fb1109cd-d936-43b5-93cd-b98d8a08f45d.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=7103b06408be8b19f5cb3c94b81ad078',
    current_amount: 9787800,
    progress: 1957,
    backers_count: 239,
    goal_amount: 500000,
    start_date: '2023.07.15.',
    end_date: '2023.08.09.',
    billing_date: '2023.08.10.',
    left_day: 24,
    like_num: 41,
  },
  {
    fundingId: 1,
    category: '아트북',
    title: '<스파이더맨: 어크로스 더 유니버스> 아트북+공식 굿즈',
    fund_img:
      'https://tumblbug-pci.imgix.net/4f7b81d5f6644ab0546c1550830b087fee9731e2/e43c362af955a9ab1e07587af2ceb05707fc28ac/b1ccc39baa075d4a16c99c789999706243c7b79a/dc4f106d-679f-446f-9990-77cbdab35281.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e2257d31ad60c43dbd844924646d8355',
    current_amount: 153000,
    progress: 32,
    backers_count: 34,
    goal_amount: 500000,
    start_date: '2023.07.06.',
    end_date: '2023.07.31.',
    billing_date: '2023.08.01.',
    left_day: 15,
    like_num: 241,
  },
  {
    fundingId: 2,
    category: '소품',
    title: '변색,먼지 NO ! 소중한 내 주얼리를 지켜줄 주얼리룸',
    fund_img:
      'https://tumblbug-pci.imgix.net/ed205da774ba06eeb99f549c98cd2fd315bc8263/6bb8ea2dcdee528abf45642a7d9fc1f0f39f7be4/3f448850c94bc185c473ab3fd2f7e1b7c3ae7148/f1506831-e08b-4c7e-b801-a4dcd1994c9b.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=edf3d3f7bf3b81f05d9f868bf9403aa3',
    current_amount: 15905050,
    progress: 3181,
    backers_count: 394,
    goal_amount: 500000,
    start_date: '2023.06.15.',
    end_date: '2023.07.20.',
    billing_date: '2023.07.21.',
    left_day: 4,
    like_num: 121,
  },
  {
    fundingId: 3,
    category: '베이킹',
    title: '[신세계 팝업스토어 Best] 집에서 즐겨먹는 8가지 푸딩',
    fund_img:
      'https://tumblbug-pci.imgix.net/4f7b81d5f6644ab0546c1550830b087fee9731e2/a942a2f8dc6f8cb765a188a7817e4d132d87ed86/1096bb40bf4ba873acbbdf93d2ff551b0428fd1c/1b7be2ae-5122-47b8-bbd2-7bf6a6b6ba01.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=3b8824fcac62cb98037d77570a9d9d74',
    current_amount: 819500,
    progress: 81,
    backers_count: 11,
    goal_amount: 1000000,
    start_date: '2023.07.16.',
    end_date: '2023.08.17.',
    billing_date: '2023.08.18.',
    left_day: 22,
    like_num: 83,
  },
];

const Host = styled.div`
  background-color: black;
  height: 250px;
`;

const HostImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  background-size: cover;
  position: relative;
  opacity: 0.5;
`;

const HostDetail = styled.div`
  position: absolute;
  top: 30%;
  padding: 0px 200px;
  font-size: 30px;
  color: white;
`;

const HostName = styled(HostDetail)`
  top: 25%;
  font-weight: bold;
`;

const PageContainer = styled.div`
  padding: 50px 400px;
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
  min-width: 980px;
  padding: 0px 400px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

function Home() {
  //   const { roomId } = useParams();

  //   const { isLoading, data: room } = useQuery(
  //     ['room', roomId],
  //     () => getRoom(roomId),
  //     {
  //       onSuccess: (room) => {
  //         console.log('Room data:', room);
  //       },
  //     },
  //   );

  return (
    <>
      <Header />
      <PageContainer>
        <Title> 현재 진행 중인 펀딩 </Title>
        <Detail>
          <Num>{funds.length}</Num> 개의 프로젝트가 있습니다.
        </Detail>
      </PageContainer>
      <Funds>
        <Grids>
          {funds.map((fund) => (
            <FundingCard key={fund.funding_id} fund={fund} />
          ))}
        </Grids>
      </Funds>
      {/* <CreateButton roomId={roomId} room_name={room?.room_name} /> */}
      {/* <Footer /> */}
    </>
  );
}
export default Home;
