import styled from 'styled-components'
import { DEFAULT_ITEM_SIZE, UNIT, BASE_SIZE } from './config'
import calculateWidth from '../../utils/calculateWidth'
import calculateHeight from '../../utils/calculateHeight'

const Keyboard = styled.div.attrs((props) => ({
  width: calculateWidth(props.keycaps),
  height: calculateHeight(props.keycaps)
}))`
  background: rgba(128, 128, 128, 0.1);
  border: 1rem solid rgba(128, 128, 128, 0.25);
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.width * DEFAULT_ITEM_SIZE},
    1fr
  );
  grid-template-rows: repeat(
    ${(props) => props.height * DEFAULT_ITEM_SIZE},
    auto
  );
  margin: 0 auto;
  padding: ${(props) =>
    (UNIT - BASE_SIZE) / (UNIT - BASE_SIZE + props.width * UNIT) / 2}%;
`

export default Keyboard
