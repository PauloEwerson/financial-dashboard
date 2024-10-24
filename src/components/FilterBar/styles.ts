import styled from 'styled-components';

export const FilterContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #cccccc;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const FilterGroup = styled.div`
  margin-right: 20px;
  margin-bottom: 10px;
`;

export const FilterLabel = styled.label`
  margin-right: 8px;
  font-weight: bold;
`;

export const FilterSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  background-color: #0070f3;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    background-color: #005bb5;
  }
`;