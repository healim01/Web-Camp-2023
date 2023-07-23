import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 320px;
  overflow: hidden;
  transition: all 0.2s linear;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
  }
`;

const FundImg = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  text-align: start;
  margin-bottom: 10px;
`;

const Cate = styled.div`
  font-size: 12px;
  display: flex;
  margin: 10px;
  margin-bottom: 5px;
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BarDetail = styled.div`
  font-size: 12px;
  color: ${(props) => props.color};
  font-weight: 400;
  margin: 5px;
`;

export default function FundingCard(props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(props.fund.progress);
  }, []);

  if (progress > 100) {
    setProgress(100);
  }

  return (
    <Link to={`/funding/${props.fund.fundingId}`}>
      <Card key={props.fund.funding_id}>
        <div>
          <FundImg src={props.fund.fund_img} />
          <Cate>{props.fund.category}</Cate>
          <Title> {props.fund.title} </Title>
        </div>
        <ProgressBar>
          <Container sx={{ width: '100%' }}>
            <BarDetail color="red">{props.fund.progress}%</BarDetail>
            <BarDetail>{props.fund.left_day}일 남음 </BarDetail>
          </Container>
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              sx={{
                '& .MuiLinearProgress-bar': {
                  backgroundColor: 'red',
                },
                bgcolor: 'lightgray',
              }}
              value={progress}
            />
          </Box>
        </ProgressBar>
      </Card>
    </Link>
  );
}
