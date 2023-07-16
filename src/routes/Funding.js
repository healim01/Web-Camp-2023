import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PopUp from '../Components/PopUp';
// import FundingDetail from './FundingDetail';
// import PopUp from '../components/PopUp';
// import Header from '../components/Header';
// import { getFunding } from '../apis/fundingApi';
// import Footer from '../components/Footer';
// import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

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
    current_amount: 153218000,
    progress: 1532,
    backers_count: 2234,
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

const Fund = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 1000px;
  padding: 50px 250px;
`;

const Category = styled.div`
  font-size: 14px;
  width: 40px;
  height: 30px;
  border: 1px solid #d3d3d3;
  background-color: #fafafa;
  /* border-radius: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ProTitle = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 25px 0px;
  gap: 30px;
`;

const Container = styled.div``;

const ProImg = styled.img`
  width: 600px;
  height: 450px;
  object-fit: cover;
`;

const CurrContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CurrContentTitle = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
  color: black;
`;

const ItemDetail = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const CurrContentItem = styled.div`
  font-weight: 400;
  font-size: 40px;
  margin-bottom: 10px;
  color: ${(props) => props.color};
`;

const Detail = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 10px;
  color: ${(props) => props.color};
`;

const Percentage = styled(Detail)`
  font-size: 18px;
  font-weight: bold;
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: lightgray;
  opacity: 0.5;
  margin-bottom: 20px;
`;

const GoalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 10px;
`;

const GoalContentItem = styled.span`
  display: flex;
  font-size: 13px;
`;

const GoalContentTitle = styled(GoalContentItem)`
  font-weight: bold;
  margin-right: 30px;
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const Likes = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  font-size: 13px;
  background-color: white;
  margin-right: 30px;
  &:active {
    color: red;
  }
`;

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
};

const converter = (num) => {
  if (typeof num === 'undefined') {
    return '';
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function Funding() {
  const { fundingId } = useParams();

  //   const { isLoading, data: fund } = useQuery(
  //     ['fund', roomId],
  //     () => getFunding(fundingId),
  //     {
  //       refetchInterval: 500,
  //       onSuccess: (data) => {
  //         console.log('Funding data:', data);
  //       },
  //     },
  //   );

  //   console.log(fund);

  return (
    <>
      {/* <Header /> */}
      <Fund>
        <Category> {funds[fundingId]?.category} </Category>
        <ProTitle> {funds[fundingId]?.title} </ProTitle>
        <Grids>
          <Container>
            <ProImg src={funds[fundingId]?.fund_img} />
          </Container>
          <Container>
            <CurrContent>
              <CurrContentTitle> 모인 금액 </CurrContentTitle>
              <ItemDetail>
                <CurrContentItem>
                  {converter(funds[fundingId]?.current_amount)}
                </CurrContentItem>
                <Detail>원</Detail>
                <Percentage>
                  {' '}
                  {Math.ceil(funds[fundingId]?.progress)}%
                </Percentage>
              </ItemDetail>
              <CurrContentTitle> 남은시간 </CurrContentTitle>
              <ItemDetail>
                <CurrContentItem>{funds[fundingId]?.left_day}</CurrContentItem>
                <Detail>일</Detail>
              </ItemDetail>
              <CurrContentTitle> 후원자 </CurrContentTitle>
              <ItemDetail>
                <CurrContentItem>
                  {converter(funds[fundingId]?.backers_count)}
                </CurrContentItem>
                <Detail>명 참여</Detail>
              </ItemDetail>
            </CurrContent>
            <Hr />
            <GoalContent>
              <GoalContentTitle> 목표 금액 </GoalContentTitle>
              <GoalContentItem>
                {converter(funds[fundingId]?.goal_amount)}원
              </GoalContentItem>
            </GoalContent>
            <GoalContent>
              <GoalContentTitle> 펀딩 기간 </GoalContentTitle>
              <GoalContentItem>
                {formatDate(funds[fundingId]?.start_date)} ~{' '}
                {formatDate(funds[fundingId]?.end_date)}
              </GoalContentItem>
            </GoalContent>
            <GoalContent>
              <GoalContentTitle> 결제 </GoalContentTitle>
              <GoalContentItem>
                목표금액 달성시 {formatDate(funds[fundingId]?.billing_date)}에
                결제 진행
              </GoalContentItem>
            </GoalContent>
            <Buttons>
              <Likes>
                <FavoriteBorderIcon fontSize="small" />
                {funds[fundingId]?.like_num}
              </Likes>
              <PopUp />
            </Buttons>
          </Container>
        </Grids>
        {/* <FundingDetail fundDetail={fund} /> */}
      </Fund>
      {/* <Footer /> */}
    </>
  );
}
export default Funding;
