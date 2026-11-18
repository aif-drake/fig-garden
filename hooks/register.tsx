import type { Register, ThemeSetArgs } from 'claude-code'

import { problems, theme } from './palette'
import { SCENE } from './scene'

// The app's own panels (sidebar, side panes, the strip around the prompt bar) blur the
// drawing behind them but add no tint. The default glass tints them (a lighter band
// around the prompt bar) and glass: false leaves them solid (a block over the drawing).
const LOOK: ThemeSetArgs = { colors: theme, backdrop: { scene: 'garland', glass: { blur: 10, opacity: 0 } } }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.props.scene !== 'garland' || (e.surface !== 'desktop' && e.surface !== 'mobile')) {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Tomato vines down both sides and fig branches in the bottom corners" isInteractive />
  })

  // A soft sage card with an outline behind each block of a reply.
  // A Box can't blur what is behind it, so the frost is a see-through tint. At 55% it
  // keeps text near 6.5:1 on both the light and the dark ground.
  on('ui.render', { component: 'AssistantMessage' }, async ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }
    const { Box } = $.ui.resolve(e)
    const row = await next(e)

    return (
      <Box
        borderStyle="round"
        borderColor="rgba(147, 183, 130, 0.75)"
        backgroundColor="rgba(110, 140, 100, 0.55)"
        paddingX={2}
        paddingY={1}
      >
        {row}
      </Box>
    )
  })
}
