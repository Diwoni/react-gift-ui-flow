import styled from '@emotion/styled';
import { Container } from '../common/layouts/Container';
import { Grid } from '../common/layouts/Grid';
import { RankingGoodsItems } from '../common/GoodsItem/Ranking';
import { useState } from 'react';

export default function GiftList() {
  const [showMore, setShowMore] = useState(false);

  const baseItem = {
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  };

  const items = Array(21)
    .fill(baseItem)
    .map((item, index) => ({ ...item, rankingIndex: index + 1 }));

  const initialItems = items.slice(0, 6);
  const moreItems = items.slice(6, 21);

  const onMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Container maxWidth="1024px">
      <Grid gap={30} columns={6}>
        {initialItems.map((item, index) => (
          <RankingGoodsItems
            key={index}
            rankingIndex={item.rankingIndex}
            imageSrc={item.imageSrc}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
          />
        ))}
        {showMore &&
          moreItems.map((item, index) => (
            <RankingGoodsItems
              key={index + 6}
              imageSrc={item.imageSrc}
              subtitle={item.subtitle}
              title={item.title}
              amount={item.amount}
              rankingIndex={item.rankingIndex}
            />
          ))}
      </Grid>
      <MoreButtonWrapper>
        <MoreButton onClick={onMoreClick}>{showMore ? '접기' : '더보기'}</MoreButton>
      </MoreButtonWrapper>
    </Container>
  );
}

const MoreButtonWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const MoreButton = styled.button`
  width: 100%;
  max-width: 480px;
  height: 60px;
  text-align: center;
  cursor: pointer;
  align-items: center;
  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
  color: rgb(17, 17, 17);
  transition: background-color 200ms ease 0s;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;
