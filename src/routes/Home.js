import styled from 'styled-components';
// import FundingCard from '../components/FundingCard';
import { useQuery } from 'react-query';
// import { getRoom } from '../apis/fundingApi';
import { useParams } from 'react-router-dom';
import FundingCard from '../Components/FundingCard';
import Header from '../Components/Header';
import { getFundingName } from '../apis/FundingApi';
import { useState } from 'react';

const funds = [
  {
    fundingId: 0,
    category: '향수',
    title: '먹을 때 말고 진짜 복숭아 옆에서 나는 온전한 향기',
    fund_img:
      'https://images.sbs.com.au/dims4/default/398b0cd/2147483647/strip/true/crop/711x400+49+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2F0a%2F7b%2F77a5c03e4c14a0f7eaa21a633405%2F190625-%EC%86%8C%EC%85%9C%EB%B2%A4%EC%B2%98-%EC%86%8C%EA%B0%9C-%EB%A9%94%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80-2%ED%95%B4%EC%A1%B0%EB%A5%98-%EB%B6%80%EC%82%B0%EB%AC%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%84-%EB%A7%88%EB%A6%B0%EC%9D%B4%EB%85%B8%EB%B2%A0%EC%9D%B4%EC%85%98%EC%9D%98-%EC%A2%85%EC%9D%B4%EC%BB%B5.jpg',
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
    fund_img: 'https://sitem.ssgcdn.com/91/99/58/item/1000522589991_i1_750.jpg',
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
    company: '',
    fund_img:
      // 'https://tumblbug-pci.imgix.net/ed205da774ba06eeb99f549c98cd2fd315bc8263/6bb8ea2dcdee528abf45642a7d9fc1f0f39f7be4/3f448850c94bc185c473ab3fd2f7e1b7c3ae7148/f1506831-e08b-4c7e-b801-a4dcd1994c9b.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=edf3d3f7bf3b81f05d9f868bf9403aa3',
      'https://cdn.imweb.me/thumbnail/20171209/5a2b65172daff.jpg',
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
    company: '',
    fund_img:
      // 'https://tumblbug-pci.imgix.net/4f7b81d5f6644ab0546c1550830b087fee9731e2/a942a2f8dc6f8cb765a188a7817e4d132d87ed86/1096bb40bf4ba873acbbdf93d2ff551b0428fd1c/1b7be2ae-5122-47b8-bbd2-7bf6a6b6ba01.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=3b8824fcac62cb98037d77570a9d9d74',
      'https://cdn.coldchaininsight.com/news/photo/202212/1244_1851_2511.jpg',
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
  //   const { roomId } = useParams();
  // const { funds, setFunds } = useState([]);

  //   const { isLoading, data: room } = useQuery(
  //     ['room', roomId],
  //     () => getRoom(roomId),
  //     {
  //       onSuccess: (room) => {
  //         console.log('Room data:', room);
  //       },
  //     },
  //   );

  const { isLoading, data: name } = useQuery([], () => getFundingName(), {
    // refetchInterval: 500,
    onSuccess: (data) => {
      // console.log('Funding data:', data.data.제품명);
      let fundd = data.data;
      // 각 펀딩의 '제품명'을 출력
      let i = 0;
      fundd.slice(0, 4).map((fund) => {
        funds[i].title = fund.제품명;
        funds[i].category = fund.업체명;
        i++;
      });
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
        </Width>
      </Padding>
      {/* <CreateButton roomId={roomId} room_name={room?.room_name} /> */}
      {/* <Footer /> */}
    </>
  );
}
export default Home;
