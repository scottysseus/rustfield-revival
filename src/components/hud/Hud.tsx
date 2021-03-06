import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Fab, Typography } from '@mui/material'
import { Tile } from '../../game_logic'
import { ContractPane } from './ContractPane'
import { State, dispatcher } from '../reducers'
import { TileSummary } from './TileSummary'
import { PlayerSummaryStrip } from './PlayerSummaryStrip'
import NextPlanIcon from '@mui/icons-material/NextPlan'

export function Hud (props: {
  state: State,
  dispatch: dispatcher
}) {
  const nextTurn = () => {
    props.dispatch({ type: 'advanceTurn' })
  }

  let selectedTile: Tile | null
  if (props.state.ui.selectedTile === null) {
    selectedTile = null
  } else {
    selectedTile = props.state.game.map.tiles[props.state.ui.selectedTile]
  }

  return (
    <>
      <div className='hud'>
        <PlayerSummaryStrip gameState={props.state.game} />
        <Accordion defaultExpanded className='hud-pane-expander'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h6'>Contracts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ContractPane gameState={props.state.game} />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className='bottom-hud'>
        <TileSummary money={props.state.game.player.resources.money} tile={selectedTile} tileIndex={props.state.ui.selectedTile} workers={props.state.game.player.resources.workers} dispatch={props.dispatch} />
      </div>
      <div className='bottom-hud-right'>
        <Fab variant='extended' size='large' color='secondary' aria-label='add' onClick={nextTurn}>
          <NextPlanIcon sx={{ mr: 1 }} /> Next Turn
        </Fab>
      </div>
    </>
  )
}
