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
import { getFundingOne } from '../apis/FundingApi';

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
  margin-bottom: 0px;
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

  const { isLoading, data: funds } = useQuery(
    ['funding'],
    () => getFundingOne(fundingId),
    {
      onSuccess: (data) => {
        console.log('Funding data:');
        console.log(data);
      },
    },
  );

  return (
    <>
      <Header />
      <Fund>
        <Category> {funds[fundingId]?.company} </Category>
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
      </Fund>
    </>
  );
}
export default Funding;
