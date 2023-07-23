import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PopUp from '../Components/PopUp';
// import FundingDetail from './FundingDetail';
// import PopUp from '../components/PopUp';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { useQuery } from 'react-query';
import { getFundingName } from '../apis/FundingApi';

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
    backers_count: 24,
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
    fund_img: 'https://cdn.imweb.me/thumbnail/20171209/5a2b65172daff.jpg',
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
      'https://cdn.coldchaininsight.com/news/photo/202212/1244_1851_2511.jpg',
    // 'https://tumblbug-pci.imgix.net/4f7b81d5f6644ab0546c1550830b087fee9731e2/a942a2f8dc6f8cb765a188a7817e4d132d87ed86/1096bb40bf4ba873acbbdf93d2ff551b0428fd1c/1b7be2ae-5122-47b8-bbd2-7bf6a6b6ba01.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=3b8824fcac62cb98037d77570a9d9d74',
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
  width: 150px;
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

  const { isLoading, data: name } = useQuery(
    [],
    () => getFundingName(),
    {
      // refetchInterval: 500,
      onSuccess: (data) => {
        let fundd = data.data[fundingId];
        console.log(fundingId);
        funds[fundingId].title = fundd.제품명;
        funds[fundingId].category = fundd.업체명;
        console.log(fundd.제품명);
      },
    },
    [],
  );

  return (
    <>
      <Header />
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
