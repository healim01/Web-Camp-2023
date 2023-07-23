import axios from 'axios';

export const getFundingName = async () => {
  const response = await axios.get(
    `https://api.odcloud.kr/api/15088588/v1/uddi:058ac188-698e-4e61-9615-9152e8a6b42b?page=1&perPage=10&serviceKey=CDJ5qw6ktCfmqRZPhuMZ3unBz8F%2FRjXBXte9DIEZgjJeJq755KQTFeo%2B8SAEBvg6RANUJUZLBiTP%2FONCRWdJMA%3D%3D`,
  );
  return response.data;
};
