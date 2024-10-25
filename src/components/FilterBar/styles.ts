import styled from 'styled-components';
import { Button } from 'antd';

export const FilterContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #cccccc;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FilterButtonStyled = styled(Button)`
  margin-left: auto;
`;
