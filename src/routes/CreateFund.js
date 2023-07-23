import React, { useState } from 'react';

import { Form, Divider, Input, Button, InputNumber } from 'antd';

// import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
// import DatePickerValue from '../components/DatePickeValue';
// import AddPopUp from '../components/AddPopUp';
import Header from '../Components/Header';
import { red } from '@mui/material/colors';

// async function postProduct(values){
//     const response = await axios.post(`http://localhost:3000/products`, {
//         name: values.name,
//         seller: values.seller,
//         price: values.price,
//         imageUrl: imageUrl // 상태관리 되고 있는 imageurl
//     });
//     return response.data;
// }

const AddFund = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 980px;
  padding: 50px 300px;
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 21px;
  text-align: start;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  margin-bottom: 30px;
`;

const CateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Cate = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid #ee7f41;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: white;
  margin: 10px;
`;

const TextButton = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid red;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const TextGrids = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 30px;
`;

const Texts = styled.div`
  margin-bottom: 10px;
`;

const TextDetail = styled.div`
  font-size: 16px;
  display: flex;
  text-align: start;
  word-break: keep-all;
`;

const TextTitle = styled(TextDetail)`
  font-weight: bold;
`;

const TextSub = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  text-align: start;
  margin-left: 5px;
`;

const InputImg = styled.input``;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function CreateFund() {
  const { roomId } = useParams(null);

  const onSubmit = (values) => {
    console.log(values);

    // axios
    //   .post(`http://localhost:8080/funding/${roomId}/15`, {
    //     funding_title: values.funding_name,
    //     title_image: mainImg,
    //     goal_amount: values.goal_amount,
    //     price: values.price,
    //     description: values.description,
    //     funding_image: detailImg,
    //     funding_budget: values.budget,
    //     funding_schedule: values.schedule,
    //     team_introduction: values.team,
    //     created_date: '2023-07-12',
    //     start_date: '2023-07-12 01',
    //     end_date: '2023-07-12',
    //     budget_date: '2023-07-12',
    //   })
    //   .then((result) => {
    //     console.log('up');
    //     console.log(result);
    //     // navigate('/');
    //   })
    //   .catch((e) => {
    //     console.log('error');
    //     console.log(e);
    //   });
  };

  const [mainImg, setMainImg] = useState(null);
  const [detailImg, setDetailImg] = useState(null);

  const onMainUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setMainImg(reader.result || null);
    };

    console.log(reader.result);
  };

  const onDetailUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setDetailImg(reader.result || null);
    };

    console.log(reader.result);
  };

  return (
    <>
      <Header />
      <AddFund>
        <Grids>
          <Title>프로젝트 기획</Title>
          <Title>
            새로운 프로젝트를 계획 중이시군요 ! <br /> 이 프로젝트에 대해
            소개해주세요.
          </Title>
        </Grids>
        <>
          <Form name="productUpload" onFinish={onSubmit}>
            {/* <CateContainer>
              <Cate> # 향수 </Cate>
              <Cate> # 굿즈 </Cate>
              <Cate> # 아트북 </Cate>
            </CateContainer>
            <CateContainer>
              <Cate> # 소품 </Cate>
              <Cate> # 베이킹 </Cate>
              <Cate> # 패션 </Cate>
              <Cate> # 악세서리 </Cate>
            </CateContainer> */}
            {/* 소개 */}
            <Grids>
              <TextGrids>
                <TextButton> 제품 </TextButton>
                <Texts>
                  <TextTitle>프로젝트 제품</TextTitle>
                  <TextDetail>
                    프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을
                    붙여주세요.
                  </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <TextSub>프로젝트 이름</TextSub>
                <Form.Item name="funding_name">
                  <Input
                    size="large"
                    style={{ width: '400px' }}
                    placeholder="제목을 입력하세요"
                  />
                </Form.Item>
              </InputForm>
            </Grids>
            <Grids>
              <TextGrids>
                <div />
                <Texts>
                  <TextTitle>프로젝트 대표 사진</TextTitle>
                  <TextDetail> 이 사진은 대표 사진으로 등록됩니다. </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <TextSub>상품 사진</TextSub>
                <InputImg
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={onMainUpload}
                />
                {mainImg == null
                  ? null
                  : mainImg && <img width={'100%'} src={mainImg} alt="Main" />}
              </InputForm>
            </Grids>

            <Divider />
            {/* 예산 */}
            <Grids>
              <TextGrids>
                <TextButton> 예산 </TextButton>
                <Texts>
                  <TextTitle>제품 가격</TextTitle>
                  <TextDetail> 제품 하나 당 가격을 입력해주세요. </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <TextSub>제품 가격</TextSub>
                <Form.Item name="price">
                  <InputNumber
                    size="large"
                    style={{ width: '400px' }}
                    placeholder="제품 가격을 입력해주세요. (원)"
                  />
                </Form.Item>
              </InputForm>
            </Grids>
            <Grids>
              <TextGrids>
                <div />
                <Texts>
                  <TextTitle>목표 금액</TextTitle>
                  <TextDetail>
                    프로젝트를 완수하기 위해 필요한 금액을 설정해주세요.
                  </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <TextSub>목표 금액</TextSub>
                <Form.Item name="goal_amount">
                  <InputNumber
                    size="large"
                    style={{ width: '400px' }}
                    placeholder="목표 금액을 입력해주세요. (원)"
                  />
                </Form.Item>
              </InputForm>
            </Grids>
            <Divider />
            {/* 일정 */}
            {/* <Grids>
              <TextGrids>
                <TextButton> 일정 </TextButton>
                <Texts>
                  <TextTitle>펀딩 일정</TextTitle>
                  <TextDetail>
                    설정한 일시가 되면 펀딩이 자동 시작됩니다. 펀딩 시작 전까지
                    날짜를 변경할 수 있고, 즉시 펀딩을 시작할 수도 있습니다.
                  </TextDetail>
                </Texts>
              </TextGrids>
              <InputForm>
                <TextSub>펀딩 일정</TextSub> */}
            {/* <DatePickerValue /> */}
            {/* </InputForm>
            </Grids> */}
            {/* <Divider /> */}
            <Form.Item>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  id="submit-button"
                  size="large"
                  htmlType="submit"
                  style={{
                    border: '1px solid red',
                    marginRight: '10px',
                    fontWeight: 'bold',
                    width: '150px',
                    borderRadius: '20px',
                  }}
                >
                  취소
                </Button>
                <Button
                  id="submit-button"
                  size="large"
                  htmlType="submit"
                  style={{
                    border: '1px solid red',
                    marginRight: '10px',
                    fontWeight: 'bold',
                    width: '150px',
                    borderRadius: '20px',
                    backgroundColor: 'red',
                    color: 'white',
                  }}
                >
                  등록
                </Button>
                {/* <AddPopUp roomId={roomId} /> */}
              </div>
            </Form.Item>
          </Form>
        </>
      </AddFund>
    </>
  );
}
