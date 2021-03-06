import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    margin-left: 5px;
    text-decoration: none;

    color: var(--color-blue);

    font-weight: 600;
  }
`;
